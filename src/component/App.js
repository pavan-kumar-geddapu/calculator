import React from 'react';
import './App.css';
import Display from './Display.js';
import ButtonPanel from './ButtonPanel.js';
import calculate from '../logic/calculate.js';

class App extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName));
        console.log(this.state.total, this.state.next, this.state.operation);
    };

    render() {
        return (
            <div className="wrapper">
                <div className="app-component">
                    <Display value={this.state.next || this.state.total || "0"} />
                    <ButtonPanel clickHandler = {this.handleClick} />
                </div>
            </div>
        );
    }
}

export default App;