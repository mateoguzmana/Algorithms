import React, { Component } from 'react';
import Description from '../Description';

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
                <Description title={"Binary Gap"}>
                <h5>Find longest sequence of zeros in binary representation of an integer.</h5>
                <br/><br/>
                A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
                <br/><br/>
                For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.
                <br/><br/>
                Write a function:
                <br/><br/>
                function solution(N);
                <br/><br/>
                that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
                <br/><br/>
                For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
                <br/><br/>
                Assume that:
                <br/><br/>
                N is an integer within the range [1..2,147,483,647].
                Complexity:
                <br/><br/>
                expected worst-case time complexity is O(log(N));
                expected worst-case space complexity is O(1).
                </Description>
                <div className="row"> 
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input 
                                type="text" 
                                id="input" 
                                className="form-control" 
                                placeholder="Please write a number here, example: 529" 
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
