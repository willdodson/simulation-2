import React, {Component} from 'react';
import logo from '../assets/auth_logo.png';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        };
    }

    updateUsername(val){
        this.setState({ username: val })
    }

    updatePassword(val){
        this.setState({ password: val })
    }

    login(){
        let body = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/auth/login', body)
        .then(res => {
            console.log('Logged In');
            this.setState({loggedIn: true});
        })
        .catch(err => console.error(err));
    }

    register(){
        let body = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:4000/#/api/auth/register', body)
        .then(res => {
            console.log('Registered');
            this.setState({loggedIn: true});
        })
        .catch(err => console.error(err));
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/dashboard" />
        }

        return (
            <div className="Login">
                <img src={logo} alt="logo" />

                <div>
                    <label>Username</label>
                    <input onChange={e => this.updateUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange={e => this.updatePassword(e.target.value)} />
                </div>
                <div>
                    <button className="btn login-btn" onClick={() => this.login()}>Login</button>
                    <button className="btn register-btn" onClick={() => this.register()}>Register</button>
                </div>
            </div>
        )
    }
}

export default Login;