import React, { Component } from 'react';

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

        this.printOutput(indexArray, dominator, numberDominator);
    }

    printOutput(indexArray, dominator, numberDominator) {
        $("#outputIndexArray").html("<h3>" + indexArray + "</h3>").parent().fadeIn();
        $("#outputDominator").html("<h3>" + dominator + "</h3>").parent().fadeIn();
        $("#outputNumberDominator").html("<h3>" + numberDominator + "</h3>").parent().fadeIn();
    }

    render() {
        return (
            <div>
                <h2>Dominator</h2>
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
                        <h2 style={{ display: 'none' }}>IndexArray: <span id="outputIndexArray"></span></h2>
                        <h2 style={{ display: 'none' }}>Dominator: <span id="outputDominator"></span></h2>
                        <h2 style={{ display: 'none' }}>Number Dominator: <span id="outputNumberDominator"></span></h2>
                    </div>
                </div>
            </div>
        );
    }
}
