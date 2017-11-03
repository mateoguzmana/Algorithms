import React, { Component } from 'react';
import Description from '../Description';

export default class PermMissingElem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: ''
        };

        this.printOutput = this.printOutput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        // Convert string to array
        value = value.split(',').map(Number);

        this.setState({ inputNumber: value });
    }

    permMissingElem() {

        A = A.sort(function (a, b) { return a - b; });

        for (let i in A) {
            if (A[i] > 1) {
                let tempKeyPlus = parseInt(i) + 1;
                let tempKeyMinus = parseInt(i) - 1;

                if (A[tempKeyPlus] != undefined) {
                    if (A[i] + 1 == A[tempKeyPlus]) {
                        if (A[tempKeyMinus] != undefined) {
                            if (A[i] - 1 != A[tempKeyMinus]) {
                                return A[i];
                            }
                        }
                    } else {
                        return A[i] + 1;
                    }
                }
            } else {
                if (A[i] == 1) {
                    null;
                } else {
                    return 1;
                }
            }
        }

    }

    printOutput() {
        let newArray = this.permMissingElem();
        $("#output").html("<h3>" + newArray + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <Description title={"Perm Missing Elem"}>
                    <h5>Find the missing element in a given permutation.</h5>
                    <br /><br />
                    A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
                    <br /><br />
                    Your goal is to find that missing element.
                    <br /><br />
                    Write a function:
                    <br /><br />
                    function solution(A);
                    <br /><br />
                    that, given a zero-indexed array A, returns the value of the missing element.
                    <br /><br />
                    For example, given array A such that:
                    <br /><br />
                      A[0] = 2
                      A[1] = 3
                      A[2] = 1
                      A[3] = 5
                    <br /><br />
                    the function should return 4, as it is the missing element.
                    <br /><br />
                    Assume that:
                    <br /><br />
                    N is an integer within the range [0..100,000];
                    <br />
                    the elements of A are all distinct;
                    <br />
                    each element of array A is an integer within the range [1..(N + 1)].
                    <br /><br />
                    Complexity:
                    <br /><br />
                    expected worst-case time complexity is O(N);
                    <br />
                    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
                    <br />
                    Elements of input arrays can be modified.
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Array</label>
                            <input
                                type="text"
                                id="input"
                                className="form-control"
                                placeholder="Please write a numbers array here, example: 1,2,4,5"
                                value={this.state.inputNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-sm-12">
                            <br />
                            <button
                                className="btn btn-info btn-block"
                                onClick={this.printOutput}
                            >
                                Run
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-6" id="divOutput">
                        <h2 style={{ display: 'none' }}>Output: <span id="output"></span></h2>
                    </div>
                </div>
            </div>
        );
    }
}
