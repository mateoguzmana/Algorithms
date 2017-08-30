import React, { Component } from 'react';

export default class BinaryGap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: ''
        };

        this.calculateBinaryGap = this.calculateBinaryGap.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputNumber: event.target.value});
    }

    calculateBinaryGap(){
        let number = this.state.inputNumber;
        let binary = Number(number).toString(2);
        let gaps = String(binary).split("1");
        let tempLength = gaps.length;
        let maximumGap; 

        if(gaps[tempLength-1]==""){
            //not delete
            maximumGap = Math.max.apply(Math, Array.prototype.map.call(gaps,function (el) { return el.length; }));
        }else{
            //delete last element
            gaps.pop();
            maximumGap = Math.max.apply(Math, Array.prototype.map.call(gaps,function (el) { return el.length; }));
        }

        this.printOutput(binary, maximumGap);
    }

    printOutput(binary, maximumGap){
        $("#outputBinary").html("<h3>"+binary+"</h3>").parent().fadeIn();
        $("#outputMaximumGap").html("<h3>"+maximumGap+"</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <h2>Binary Gap</h2>
                <div className="row"> 
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input 
                                type="text" 
                                id="input" 
                                className="form-control" 
                                placeholder="Please write a number here" 
                                value={this.state.inputNumber}
                                onChange={this.handleChange}
                            />    
                        </div> 
                        <div className="col-sm-12">
                            <br/>
                            <button 
                                className="btn btn-info btn-block" 
                                onClick={this.calculateBinaryGap}
                            >
                                Run
                            </button>
                        </div>
                    </div> 
                    <div className="col-sm-6" id="divOutput">
                        <h2 style={{display:'none'}}>Binary: <span id="outputBinary" ></span></h2>
                        <h2 style={{display:'none'}}>Maximum Gap: <span id="outputMaximumGap" ></span></h2>        
                    </div> 
                </div>
            </div>
        );
    }
}
