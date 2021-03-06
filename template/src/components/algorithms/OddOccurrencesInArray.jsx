import React, { Component } from 'react';
import Description from '../Description';

export default class OddOccurrencesInArray extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: ""
        }

        this.printOutput = this.printOutput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        value = value.split(",");
        this.setState({inputNumber: value});
    }

    oddOccurrencesInArray(){
        let A = this.state.inputNumber;

        A = A.sort();
        
        for(let i = 0; i < A.length; i++){
            i = parseInt(i)
            if(i == 0) {
                if(A[i]!=A[i+1]){
                   return A[i];
                }
            } else {
                if(A[i]!=A[i-1] && A[i]!=A[i+1]){
                   return A[i];
                }
            }
        }
    }

    printOutput() {
        let number = this.oddOccurrencesInArray();
        $("#output").html("<h3>" + number + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <Description title={"Odd Occurrences In Array"}>
                    <h5>Find value that occurs in odd number of elements.</h5>
                    A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
                    <br/><br/>
                    For example, in array A such that:
                    <br/><br/>
                    A[0] = 9  A[1] = 3  A[2] = 9
                    A[3] = 3  A[4] = 9  A[5] = 7
                    A[6] = 9
                    <br/><br/>
                    the elements at indexes 0 and 2 have value 9,
                    the elements at indexes 1 and 3 have value 3,
                    the elements at indexes 4 and 6 have value 9,
                    the element at index 5 has value 7 and is unpaired.
                    <br/><br/>
                    Write a function:
                    <br/><br/>
                    function solution(A);
                    <br/><br/>
                    that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
                    <br/><br/>
                    For example, given array A such that:
                    <br/><br/>
                    A[0] = 9  A[1] = 3  A[2] = 9
                    A[3] = 3  A[4] = 9  A[5] = 7
                    A[6] = 9
                    <br/><br/>
                    the function should return 7, as explained in the example above.
                    <br/><br/>
                    Assume that:
                    <br/><br/>
                    N is an odd integer within the range [1..1,000,000];
                    each element of array A is an integer within the range [1..1,000,000,000];
                    all but one of the values in A occur an even number of times.
                    <br/><br/>
                    Complexity:
                    <br/><br/>
                    expected worst-case time complexity is O(N);
                    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
                    <br/><br/>
                    Elements of input arrays can be modified.
                </Description>
                <div className="row"> 
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input 
                                type="text" 
                                id="input" 
                                className="form-control" 
                                placeholder="Please write an array here, example: 2,2,1,3,3" 
                                value={this.state.inputNumber}
                                onChange={this.handleChange}
                            />    
                        </div> 
                        <div className="col-sm-12">
                            <br/>
                            <button 
                                className="btn btn-info btn-block" 
                                onClick={this.printOutput}
                            >
                                Run
                            </button>
                        </div>
                    </div> 
                    <div className="col-sm-6" id="divOutput">
                        <h2 style={{display:'none'}}>Unpair: <span id="output" ></span></h2>       
                    </div> 
                </div>
            </div>
        );
    }
}
