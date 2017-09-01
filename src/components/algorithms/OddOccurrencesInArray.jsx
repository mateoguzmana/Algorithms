import React, { Component } from 'react';

export default class OddOccurrencesInArray extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: "9, 3, 9, 3, 9, 3, 9, 3, 9, 60, 9"
        }

        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputNumber: event.target.value});
    }

    calculate(){
        let A = this.state.inputNumber;
        A = A.split(",");

        for(var i = 0; i < A.length; i++){
            if(A.length==1){
                console.log(A[0]);
            }else{
                if(A.length>3){
                    if(A[i]!=A[i-2] && A[i]!=A[i+2] && i % 2){
                        console.log(A[i]);
                        break;
                    }
                }else{
                    if(A[i]!=A[i+2] && i % 2){
                        console.log(A[i]);
                        break;
                    }
                }
            }
        }
    }

    render() {
        return (
            <div>
            <h2>Odd Occurrences In Array</h2>
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
                            onClick={this.calculate}
                        >
                            Run
                        </button>
                    </div>
                </div> 
                <div className="col-sm-6" id="divOutput">
                    <h2 style={{display:'none'}}>Response: <span id="outputNumber" ></span></h2>       
                </div> 
            </div>
        </div>
        );
    }
}
