import React, { Component } from 'react';
import '../style/style.css';

class Head extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div className="Head col-md-8">
                <h4> Current Contract Manager: {this.props.manager} </h4> <br />
                Currently there are {this.props.player_count} players with {this.props.balance} ether at stake.
            </div>
        );
    };
};

export default Head