import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {

    static propTypes = {
        value: PropTypes.string
    };

    render() {
        return(
            <div className="output-container">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Display;
