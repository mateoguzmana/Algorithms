import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AlgorithmsList from './AlgorithmsList';

//Import algorithms 
import BinaryGap from './algorithms/BinaryGap';
import OddOccurrencesInArray from './algorithms/OddOccurrencesInArray';
import Dominator from './algorithms/Dominator';

export default class Body extends Component {

    constructor(props) {
        super(props);

        this.views = [
            <BinaryGap />,
            <OddOccurrencesInArray />,
            <Dominator />
        ]
    }

    openView(props) {
        let viewId = props.match.params.id;

        return this.views[viewId - 1];
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Switch>
                        <Route exact path='/' component={AlgorithmsList} />
                        <Route exact path='/view/:id' render={(props) => (this.openView(props))} />
                    </Switch>
                </div>
            </div>
        );
    }
}
