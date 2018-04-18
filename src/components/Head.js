import React, { Component } from 'react';
import '../style/style.css';

class Head extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div className="Head">
                Currently there sre ___ people with ___ ether to win.
            </div>
        );
    };
};

export default Head