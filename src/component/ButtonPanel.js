import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';
import Button from './Button.js';

class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    }

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="button-panel-component">
                <div>
                    <Button clickHandler={this.handleClick} buttonSize="50%" buttonColor="white" name="AC" />
                    <Button clickHandler={this.handleClick} buttonSize="50%" buttonColor="white" name="=" />
                </div>
                <div>
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="7" />   
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="8" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="9" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="orange" name="%" />
                </div>
                <div>
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="4" />   
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="5" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="6" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="orange" name="*" />
                </div>
                <div>
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="1" />   
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="2" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="3" />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="orange" name="+" />
                </div>
                <div>
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="white" name="0" />   
                    <Button clickHandler={this.handleClick} buttonSize="50%" buttonColor="white" name="." />
                    <Button clickHandler={this.handleClick} buttonSize="25%" buttonColor="orange" name="-" />
                </div>
            </div>
            
        );
    }
}

export default ButtonPanel;