import React, { Component } from 'react';
import Description from '../Description';

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
