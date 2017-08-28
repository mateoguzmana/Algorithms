import React, { Component } from 'react';
import AlgorithmsList from './AlgorithmsList';

export default class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <AlgorithmsList/>
                </div>
            </div>
        );
    }
}
