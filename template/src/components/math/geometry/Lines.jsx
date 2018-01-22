import React, { Component } from 'react';
import Description from '../../Description';

export default class Lines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            positions: []
        }
        this.createPoints = this.createPoints.bind(this);
    }

    componentDidMount() {
        this.createLine();
    }

    createLine(firstPos, secondPos) {
        let c = this.refs.myCanvas;
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(firstPos.x, firstPos.y);
        ctx.lineTo(secondPos.x, secondPos.y);
        ctx.stroke();
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    createPoints(event) {
        let c = this.refs.myCanvas;
        let ctx = c.getContext("2d");

        let pos = this.getMousePos(c, event);

        ctx.fillRect(pos.x, pos.y, 5, 5);
        ctx.stroke();

        let points = this.state.points + 1;

        var positions = this.state.positions.slice()
        positions.push({x: pos.x, y: pos.y})

        this.setState({
            points: points,
            positions: positions
        }, () => {
            if (this.state.points == 2) {
                this.createLine(this.state.positions[0], this.state.positions[1]);
            }
        });
    }

    render() {
        return (
            <div>
                <Description title={"Geometry"}>
                    Geometry
                </Description>
                <div className="row">
                    <canvas ref="myCanvas" onClick={this.createPoints}></canvas>
                </div>
            </div>
        );
    }
}
