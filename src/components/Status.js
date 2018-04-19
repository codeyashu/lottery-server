import React, { Component } from 'react';
import '../style/style.css';

class Status extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="Status">
                { this.props.status_message }
            </div>
        );
    };
};

export default Status