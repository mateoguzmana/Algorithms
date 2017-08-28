import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import AlgorithmsList from './AlgorithmsList';
import AlgorithmsView from './AlgorithmsView';

export default class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <Switch>
                    <Route exact path='/' component={AlgorithmsList}/>
                    <Route exact path='/view/:id' component={AlgorithmsView}/>
                </Switch>
                </div>
            </div>
        );
    }
}
