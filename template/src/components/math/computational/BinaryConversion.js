import React, { Component } from 'react';
import Description from '../../Description';

export default class BinaryConversion extends Component {

    constructor() {
        super();
        this.state = {
            type: 0,
            result: ''
        };
        this.onChange = this.onChange.bind(this);
        this.convertNumber = this.convertNumber.bind(this);
    }

    onChange(e) {
        this.setState({ 
            type: e.target.value,
            result: ''
        })
    }

    convertNumber(e) {
        let number = e.target.value;
        if (number != "") {
            this.state.type === 0 ?
                this.toBinary(number)
                :
                this.toDecimal(number);
        }
    }

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

    render() {
        return (
            <div>
                <Description title={"Binary Conversion"}>
                    Convert binary to decimal number or decimal number to binary.
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
                        <h4>{`Result: ${this.state.result}`}</h4>
                    </div>
                </div>
            </div>
        );
    }
}