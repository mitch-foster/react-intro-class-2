import React, { Component } from 'react';

import calculatorImg from './calculator.png'


class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false

        }
        this.updateHeader = this.updateHeader.bind(this);
        this.setDisplay = this.setDisplay.bind(this);

    }

    updateHeader(val){
        this.setState({
            header: val,
        })
    }

    setDisplay(num){
        this.setState({
            display: this.state.display + num,
        })
    }
    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={(e)=> {this.updateHeader(e.target.value)}}/>
                <h1 id="header"> {this.state.header} </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                        <div className="output">
                            <span className="total">{this.state.display}</span>
                        </div>

                        <div className="btn clear"></div>

                        <div className="btn zero" onClick={ ()=> {this.setDisplay('0');} }></div>
                        <div className="btn one" onClick={ ()=> {this.setDisplay('1');} }></div>
                        <div className="btn two" onClick={ ()=> {this.setDisplay('2');} }></div>
                        <div className="btn three" onClick={ ()=> {this.setDisplay('3');} }></div>
                        <div className="btn four" onClick={ ()=> {this.setDisplay('4');} }></div>
                        <div className="btn five" onClick={ ()=> {this.setDisplay('5');} }></div>
                        <div className="btn six" onClick={ ()=> {this.setDisplay('6');} }></div>
                        <div className="btn seven" onClick={ ()=> {this.setDisplay('7');} }></div>
                        <div className="btn eight" onClick={ ()=> {this.setDisplay('8');} }></div>
                        <div className="btn nine" onClick={ ()=> {this.setDisplay('9');} }></div>

                        <div className="btn equal"></div>
                        <div className="btn multiply"></div>
                        <div className="btn divide"></div>
                        <div className="btn subtract"></div>
                        <div className="btn add"></div>
                </div>
            </div>
        );
    }
}

export default Calculator;