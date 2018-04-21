import React, { Component } from 'react';
import '../style/style.css';

class Body extends Component {
    constructor(props){
        super(props);

    };

    render() {
        return (
            <div className="Body col-md-8">
                <h3>Enter the lottery with minimum of 0.01 ether. </h3 >
                <form> 
                    <input />
                    <button> ENTER </button>
                </form>
                <h3 > Pick a winner </h3>
            </div>
        );    
    };
};

export default Body;