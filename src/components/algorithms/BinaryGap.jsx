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

        console.log(gaps);

        if(gaps[tempLength-1]==""){
            //not delete
            maximumGap = Math.max.apply(Math, $.map(gaps, function (el) { return el.length }));
        }else{
            //delete last element
            gaps.pop();
            maximumGap = Math.max.apply(Math, $.map(gaps, function (el) { return el.length }));
        }

        console.log(maximumGap);
        this.printOutput(binary);
    }

    printOutput(output){
        $("#divOutput").html("<h3>"+output+"</h3>");
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

                    </div> 
                </div>
            </div>
        );
    }
}
