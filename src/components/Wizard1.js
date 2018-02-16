import React, {Component} from 'react';
// import {connect} from 'react-redux';
import { newName } from '../ducks/reducer';



class Wizard1 extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            description: ''
        }
    }

    updateName(val){
        this.setState({name: val})
    }
    updateDescription(val){
        this.setState({description: val})
    }

    render(){
        const { dispatch } = this.props;
        return (
            <div>
               
                <div className="Wizard1">
                    <div className="Wizard1">
                        <div>
                            <h2 >Add New Listing</h2>
                        </div>
                        <div>
                            <button className="btn">Cancel</button>
                        </div>
                    </div>

                    <h3>Step 1</h3>
                    <label>Property Name</label>
                    <input onChange={e => this.updateName(e.target.value)}/>
                    <label>Property Description</label>
                    <input  onChange={e => this.updateDescription(e.target.value)} />
                    <button onClick={() => dispatch(newName(this.state.name))}>Next</button>
                </div>
            </div>
        )
    }
}

export default Wizard1;

// const mapStateToProps = state => {
//   return {
//     property_name: state.name,
//     description: state.description,
//   }
// };

// export default connect(mapStateToProps)(Wizard1);