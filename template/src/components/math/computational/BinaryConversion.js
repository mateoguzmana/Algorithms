import React, { Component } from 'react';
import Description from '../../Description';

export default class BinaryConversion extends Component {

    constructor() {
        super();
        this.state = {
            type: 0,
            result: ''
        };
        this.description = "Convert binary to decimal number or decimal number to binary.";
        this.onChange = this.onChange.bind(this);
        this.convertNumber = this.convertNumber.bind(this);
    }

    onChange(e) {
        this.setState({
            type: e.target.value,
            result: ''
        })
    }

    /**
     * Call conversion function depending of what option user has selected.
     * @param {Object} e Event
     */
    convertNumber(e) {
        let number = e.target.value;

        this.setState({
            input: number
        });

        if (number != "") {
            this.state.type === 0 ?
                this.toBinary(number)
                :
                this.toDecimal(number);
        }
    }

    /**
     * Convert decimal number to binary representation.
     * @param {*} number 
     */
    toBinary(number) {
        let n = parseInt(number);
        let remainderTemp = null;
        let remainders = [];
        let binary = "";

        if (number == 0) {
            return;
        }

        while (true) {
            remainderTemp = n % 2;
            n = (n - remainderTemp) / 2;

            remainders.push(remainderTemp);

            if (remainderTemp == 1 && n == 0) {
                break;
            }
        }

        this.setState({
            result: remainders.reverse().join("")
        });

    }

    /**
     * Convert binary number to decimal number representation.
     * @param {*} number 
     */
    toDecimal(number) {
        let n = number;
        n = n.split("").reverse();
        let toSum = [];
        let sum = 0;

        //to Int
        n = n.map(x => {
            return parseInt(x);
        });

        for (let x = 0; x < n.length; x++) {
            if (n[x] != 0) {
                toSum.push(Math.pow(2, x) * n[x])
            }
        }

        toSum.map(x => {
            sum += x;
        });

        this.setState({
            result: sum
        });
    }

    getDetail() {
        let toBinaryText = () => {
            return (
                <div>
                    ({this.state.input})
                    <sub>2 </sub> 
                     = (2)
                    <sub>10</sub>
                </div>
            );
        };

        let toDecimalText = () => {
            return (
                <div>
                    ({this.state.input})
                    <sub>2 </sub> 
                     = ({this.state.result})
                    <sub>10</sub>
                </div>
            );
        };

        return this.state.type === 0 ?
            toBinaryText() 
            :
            toDecimalText() 
    }

    render() {
        return (
            <div>
                <Description title={"Binary Conversion"}>
                    {this.description}
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <input
                            className="form-control"
                            type="number"
                            placeholder={this.state.type === 0 ?
                                'Decimal number, example: 345'
                                :
                                'Binary number, example: 10101'
                            }
                            onKeyUp={this.convertNumber}
                        />
                    </div>
                    <div className="col-sm-6">
                        <select
                            className="form-control"
                            value={this.state.type}
                            onChange={e => this.onChange(e)}>
                            <option value="0">Decimal to Binary</option>
                            <option value="1">Binary to Decimal</option>
                        </select>
                    </div>
                    <div className="col-sm-12">
                        <br />
                        <h4>{`Result: ${this.state.result}`}</h4>
                        <h4>{this.getDetail()}</h4>
                    </div>
                </div>
            </div>
        );
    }
}