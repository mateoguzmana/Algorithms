import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Import lists
import AlgorithmsList from './lists/AlgorithmsList';
import MathsList from './lists/MathsList';

// Import Algorithms files
import BinaryGap from './algorithms/BinaryGap';
import OddOccurrencesInArray from './algorithms/OddOccurrencesInArray';
import Dominator from './algorithms/Dominator';
import CyclicRotation from './algorithms/CyclicRotation';
import PermMissingElem from './algorithms/PermMissingElem';
import FrogJump from './algorithms/FrogJump';

// Import Math Applied files
import Lines from './math/geometry/Lines';

export default class Body extends Component {

    constructor(props) {
        super(props);

        this.views = {
            algorithms: {
                BinaryGap: <BinaryGap />,
                OddOccurrencesInArray: <OddOccurrencesInArray />,
                Dominator: <Dominator />,
                CyclicRotation: <CyclicRotation />,
                PermMissingElem: <PermMissingElem />,
                FrogJump: <FrogJump />,
            },
            maths: {
                Lines: <Lines />
            }
        }
    }

    openView(type, props) {
        let viewId = props.match.params.id;

        return this.views[type][viewId];
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Switch>
                        <Route exact path='/' component={AlgorithmsList} />
                        <Route exact path='/algorithms/' component={AlgorithmsList} />
                        <Route exact path='/maths/' component={MathsList} />
                        <Route exact path='/algorithm/:id' render={(props) => this.openView("algorithms", props)} />
                        <Route exact path='/maths/:id' render={(props) => this.openView("maths", props)} />
                    </Switch>
                </div>
            </div>
        );
    }
}
