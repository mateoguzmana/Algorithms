import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AlgorithmsList from './AlgorithmsList';

//Import algorithms 
import BinaryGap from './algorithms/BinaryGap';
import OddOccurrencesInArray from './algorithms/OddOccurrencesInArray';
import Dominator from './algorithms/Dominator';
import CyclicRotation from './algorithms/CyclicRotation';

export default class Body extends Component {

    constructor(props) {
        super(props);

        this.views = {
            BinaryGap: <BinaryGap />,
            OddOccurrencesInArray: <OddOccurrencesInArray />,
            Dominator: <Dominator />,
            CyclicRotation: <CyclicRotation />
        }
    }

    openView(props) {
        let viewId = props.match.params.id;

        return this.views[viewId];
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Switch>
                        <Route exact path='/' component={AlgorithmsList} />
                        <Route exact path='/algorithm/:id' render={(props) => (this.openView(props))} />
                    </Switch>
                </div>
            </div>
        );
    }
}
