import React, { Component } from 'react';
import Description from '../Description';

export default class CyclicRotation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: '',
            inputNumberTwo: ''
        };

        this.cyclicRotation = this.cyclicRotation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        // Convert string to array
        value = value.split(',').map(Number);

        this.setState({ inputNumber: value });
    }

    handleChangeTwo(event) {
        let value = event.target.value;

        this.setState({ inputNumberTwo: value });
    }

    cyclicRotation() {
        let A = this.state.inputNumber;
        let K = this.state.inputNumberTwo;

        let newArray = [];


        for (var x = K - 1; x < A.length; x++) {
            newArray.push(A[x])
        }

        for (var i = 0; i < K - 1; i++) {
            newArray.push(A[i])
        }

        this.printOutput(newArray);
    }

    printOutput(newArray) {
        $("#output").html("<h3>" + newArray + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <Description title={"Cyclic Rotation"}>
                    <h5>Rotate an array to the right by a given number of steps.</h5>
                    <br /><br />
                    A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
                    <br /><br />
                    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
                    <br /><br />
                    Write a function:
                    <br /><br />
                    function solution(A, K);
                    <br /><br />
                    that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
                    <br /><br />
                    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].
                    <br /><br />
                    Assume that:
                    <br /><br />
                    N and K are integers within the range [0..100];
                    <br />
                    each element of array A is an integer within the range [−1,000..1,000].
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input
                                type="text"
                                id="input"
                                className="form-control"
                                placeholder="Please write a numbers array here, example: 1,2,8,1,1,5"
                                value={this.state.inputNumber}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="input">Input Two</label>
                            <input
                                type="text"
                                id="input"
                                className="form-control"
                                placeholder="Please write a number here, example: 3"
                                value={this.state.inputNumberTwo}
                                onChange={this.handleChangeTwo}
                            />
                        </div>
                        <div className="col-sm-12">
                            <br />
                            <button
                                className="btn btn-info btn-block"
                                onClick={this.cyclicRotation}
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
