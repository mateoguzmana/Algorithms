import React, { Component } from 'react';
import Description from '../../Description';

export default class Lines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remainingPoints: 2
        };
        this.createPoints = this.createPoints.bind(this);
    }

    componentDidMount() {
        this.createLine();
    }

    createLine() {
        setTimeout(() => {
            let c = this.refs.myCanvas;
            let ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(300, 150);
            ctx.stroke();
        }, 2000)
    }

    createPoints(event) {
        console.log(event.clientX, event.clientY)
        let remainingPoints = this.state.remainingPoints - 1;
        this.setState({ remainingPoints: remainingPoints });
    }

    render() {
        return (
            <div>
                <Description title={"Geometry"}>
                    Geometry
                </Description>
                <div className="row">
                    <div>Remaining points {this.state.remainingPoints}</div>
                    <canvas ref="myCanvas" onClick={this.createPoints}></canvas>
                </div>
            </div>
        );
    }
}
