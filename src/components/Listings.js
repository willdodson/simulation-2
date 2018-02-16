import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Listings extends Component {
    constructor(){
        super();
        this.state = {
            // properties: [],
            properties: [{
                image: 'http://http.cat/100',
                property_name: 'Party house',
                loan: 150000,
                mortgage: 100000,
                rent: 600,
                address: '123 road st',
                city: 'phoenix',
                description: 'sooo goood house'
            }],
            wizardRedirect: false

        }
    }

    componentDidMount(){
        axios.get('/api/properties')
        .then(res => {
            console.log('Props: ' + JSON.stringify(res.data));
            this.setState({properties: res.data})
        })
        .catch(err => console.error(err));
    }

    addNew(){
        this.setState({wizardRedirect: true})
    }

    render(){

        if(this.state.wizardRedirect){
            return <Redirect to="/wizard1" />
        }

        let listings = this.state.properties.map((p,i) => {
            return (
                <div key={i} className="row">
                    <div className="image">
                        <img src={p.image} alt="home" />
                    </div>
                    <div className="description">
                        <h3>{p.property_name}</h3>
                        <p>{p.description}</p>
                    </div>
                    <div className="details">
                        Loan: ${p.loan}<br/>
                        Monthly Mortgage: ${p.mortgage}<br/>
                        Recommended Rent: ${p.rent * .15}<br/>
                        Desired Rent: ${p.rent}<br/>
                        Address: {p.address}<br/>
                        City: {p.city}<br/>
                        State: {p.state}<br/>
                        Zip: {p.zip}<br/>
                    </div>
                </div>
            )
        })

        return (
            <div className="Listings">
                <button onClick={() => this.addNew()} className="property-btn btn">Add New Property</button>
                <div className="wrapper">
                    List properties with "desired rent" greator than: $
                    <input />
                    <button className="btn">Filter</button>
                    <button className="btn">Reset</button>
                </div>
                <hr/>
                <h3>Home Listings</h3>

                {listings}
            </div>
        )
    }
}

export default Listings;