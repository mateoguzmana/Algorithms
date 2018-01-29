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
    }

    onChange(e) {
        this.setState({ type: e.target.value })
    }

    render() {
        return (
            <div>
                <Description title={"Binary Conversion"}>
                    Convert binary to decimal number or decimal number to binary.
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-control" placeholder={this.state.type === 0 ? 'Decimal number, example: 345' : 'Binary number, example: 10101'} />
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