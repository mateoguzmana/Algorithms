import React, { Component } from 'react';
import Description from '../../Description';

export default class Lines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            positions: [],
            lines: []
        };
        this.createPoints = this.createPoints.bind(this);
    }

    createLine(firstPoint, secondPoint) {
        let c = this.refs.canvas;
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        ctx.lineTo(secondPoint.x, secondPoint.y);
        ctx.stroke();

        let lines = this.state.lines.slice();
        lines.push({
            firstPoint: {
                x: firstPoint.x,
                y: firstPoint.y
            },
            secondPoint: {
                x: secondPoint.x,
                y: secondPoint.y
            }
        });

        this.setState({ lines: lines });
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    createPoints(event) {
        let c = this.refs.canvas;
        let ctx = c.getContext("2d");

        let pos = this.getMousePos(c, event);
        let width = this.rectSize.value;

        ctx.lineWidth = width;
        ctx.fillRect(pos.x, pos.y, 1, 1);
        ctx.stroke();

        let points = this.state.points + 1;

        let positions = this.state.positions.slice();
        positions.push({
            x: pos.x,
            y: pos.y
        });

        this.setState({
            points: points,
            positions: positions
        }, () => {
            if (this.state.points % 2 === 0) {
                this.createLine(
                    this.state.positions[this.state.points - 2],
                    this.state.positions[this.state.points - 1]
                );
            }
        });
    }

    getNumberLines() {
        return Number.isInteger(this.state.points / 2) ? 
            this.state.points / 2 
            :
            this.state.points / 2 - 0.5;
    }

    calculateLineLength(firstPoint, secondPoint) {
        let x1 = firstPoint.x;
        let y1 = firstPoint.y;
        let x2 = secondPoint.x;
        let y2 = secondPoint.y;

        return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1 - y2, 2))
    } 

    render() {
        return (
            <div>
                <Description title={"Rects"}>
                    Simple two points rects.
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <canvas ref="canvas" onClick={this.createPoints}></canvas>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="rectSize">Rect Size</label><br />
                            <select name="rectSize" id="rectSize" ref={ref => this.rectSize = ref}>
                                <option value="2">2</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="col-sm-12">
                            <h2>Number lines: {this.getNumberLines()}</h2>
                            <ul>
                                {this.state.lines.map((val, i) => {
                                    return (
                                        <li key={i}>
                                            {`Line ${i+1} length ${this.calculateLineLength(val.firstPoint, val.secondPoint)}`}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}