import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {

    static propTypes = {
        clickHandler: PropTypes.func ,
        buttonSize: PropTypes.string ,
        buttonColor: PropTypes.string
    };

    handleClick = buttonName => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return(
            <div className="button-container" style={{ width: this.props.buttonSize }}>
                <button className = "button" onClick={this.handleClick} style={{ backgroundColor: this.props.buttonColor }}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;
