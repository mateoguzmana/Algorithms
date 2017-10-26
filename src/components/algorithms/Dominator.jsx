import React, { Component } from 'react';
import Description from '../Description';

export default class Dominator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: ''
        };

        this.calculateDominator = this.calculateDominator.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        // Convert string to array
        value = value.split(',').map(Number);

        this.setState({ inputNumber: value });
    }

    calculateDominator() {
        var A = this.state.inputNumber;

        var dominator = 0;
        var dominatorTemp = 0;
        var numberDominator, indexArray;

        for (var i = 0; i < A.length; i++) {

            for (var x = 0; x < A.length; x++) {
                if (A[i] == A[x]) {
                    dominatorTemp++;
                    numberDominator = A[x];
                }
            }

            if (dominatorTemp > dominator) {
                dominator = dominatorTemp;
                for (var z = 0; z < A.length; z++) {
                    if (numberDominator == A[z]) {
                        indexArray = z;
                    }
                }
            } else {
                dominator = dominator;
                indexArray = indexArray;
            }
            dominatorTemp = 0;
        }

        dominator == 0 ? indexArray = -1 : indexArray = indexArray;

        //it should return just indexArray, but for print it prints another characteristics of dominator in array
        //return indexArray;
        this.printOutput(dominator, A[indexArray]);
    }

    printOutput(dominator, numberDominator) {
        $("#outputDominator").html("<h3>" + dominator + "</h3>").parent().fadeIn();
        $("#outputNumberDominator").html("<h3>" + numberDominator + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <Description title={"Dominator"}>
                    A zero-indexed array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.
                    <br/><br/>
                    For example, consider array A such that
                    <br/><br/>
                    A[0] = 3    A[1] = 4    A[2] =  3
                    A[3] = 2    A[4] = 3    A[5] = -1
                    A[6] = 3    A[7] = 3
                    The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.
                    <br/><br/>
                    Write a function
                    <br/><br/>
                    function solution(A);
                    <br/><br/>
                    that, given a zero-indexed array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.
                    <br/><br/>
                    Assume that:
                    <br/><br/>
                    N is an integer within the range [0..100,000];
                    each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
                    For example, given array A such that
                    <br/><br/>
                    A[0] = 3    A[1] = 4    A[2] =  3
                    A[3] = 2    A[4] = 3    A[5] = -1
                    A[6] = 3    A[7] = 3
                    the function may return 0, 2, 4, 6 or 7, as explained above.
                    <br/><br/>
                    Complexity:
                    <br/><br/>
                    expected worst-case time complexity is O(N);
                    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
                    Elements of input arrays can be modified.
                    <br/><br/>
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input
                                type="text"
                                id="input"
                                className="form-control"
                                placeholder="Please write a numbers array here, example: 1,2,-3,1,1,5"
                                value={this.state.inputNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-sm-12">
                            <br />
                            <button
                                className="btn btn-info btn-block"
                                onClick={this.calculateDominator}
                            >
                                Run
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6" id="divOutput">
                        <h2 style={{ display: 'none' }}>Dominator Repetitions: <span id="outputDominator"></span></h2>
                        <h2 style={{ display: 'none' }}>Dominator Number: <span id="outputNumberDominator"></span></h2>
                    </div>
                </div>
            </div>
        );
    }
}
