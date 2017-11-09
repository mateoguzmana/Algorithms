import React, { Component } from 'react';
import Description from '../Description';

export default class FrogJump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumberX: '',
            inputNumberY: '',
            inputNumberD: ''
        };

        this.printOutput = this.printOutput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        //parseInt numbers
        value = parseInt(value);

        this.setState({
            [name]: value
        });
    }

    frogJump() {

        let X = this.state.inputNumberX;
        let Y = this.state.inputNumberY;
        let D = this.state.inputNumberD;

        let jumping = true;
        let count = 1;

        while (jumping) {
            let distance = X + (D * count)

            if (distance >= Y) {
                jumping = false;
                return count;
            }
            count++;
            console.log("here")
        }

    }

    printOutput() {
        let jumps = this.frogJump();
        $("#output").html("<h3>" + jumps + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <Description title={"Frog Jump"}>
                    <h5>Count minimal number of jumps from position X to Y.</h5>
                    <br /><br />
                    A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
                    <br /><br />
                    Count the minimal number of jumps that the small frog must perform to reach its target.
                    <br /><br />
                    Write a function:
                    <br /><br />
                    function solution(X, Y, D);
                    <br /><br />
                    that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
                    <br /><br />
                    For example, given:
                    <br /><br />
                    X = 10
                      Y = 85
                      D = 30
                    <br /><br />
                    the function should return 3, because the frog will be positioned as follows:
                    <br /><br />
                    after the first jump, at position 10 + 30 = 40
                    after the second jump, at position 10 + 30 + 30 = 70
                    after the third jump, at position 10 + 30 + 30 + 30 = 100
                    <br /><br />
                    Assume that:
                    <br /><br />
                    X, Y and D are integers within the range [1..1,000,000,000];
                    <br />
                    X ≤ Y.
                    <br /><br />
                    Complexity:
                    <br /><br />
                    expected worst-case time complexity is O(1);
                    <br />
                    expected worst-case space complexity is O(1).
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">X</label>
                            <input
                                type="text"
                                id="inputNumberX"
                                name="inputNumberX"
                                className="form-control"
                                placeholder="Please write a number here example: 10"
                                value={this.state.inputNumberX}
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="input">Y</label>
                            <input
                                type="text"
                                id="inputNumberY"
                                name="inputNumberY"
                                className="form-control"
                                placeholder="Please write a number here example: 85"
                                value={this.state.inputNumberY}
                                onChange={this.handleChange}
                            />
                            <br />
                            <label htmlFor="input">D</label>
                            <input
                                type="text"
                                id="inputNumberD"
                                name="inputNumberD"
                                className="form-control"
                                placeholder="Please write a number here example: 30"
                                value={this.state.inputNumberD}
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
                        <h2 style={{ display: 'none' }}>Jumps: <span id="output"></span></h2>
                    </div>
                </div>
            </div>
        );
    }
}
