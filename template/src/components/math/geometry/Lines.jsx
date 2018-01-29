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

    /**
     * Calculate distance between two points.
     * Formula based on Pythagorean Theorem.
     * sqrt((x1 - x2)^2 + (y1 - y2)^2)
     * @param {Array} firstPoint 
     * @param {Array} secondPoint 
     * @returns {Number} - Distance between two points.
     */
    calculateLineLength(firstPoint, secondPoint) {
        let x1 = firstPoint.x;
        let y1 = firstPoint.y;
        let x2 = secondPoint.x;
        let y2 = secondPoint.y;

        /**
         * Round float number.
         * @param {Number} n 
         */
        let round = (n) => {
            return Math.round(n)
        };
        /**
         * Number root.
         * @param {Number} n 
         */
        let sqrt = (n) => {
            return Math.sqrt(n)
        };
        /**
         * Number squared.
         * @param {Number} n 
         */
        let pow = (n) => {
            return Math.pow(n, 2)
        };
        return round(sqrt(pow((x1 - x2)) + pow((y1 - y2))));
    }

    render() {
        return (
            <div>
                <Description title={"Lines and points"}>
                    - Simple two points rects.<br />
                    - Creation of lines from two points.<br />
                    - Calculating lines length with coordenates.<br />
                    - Line size dynamic.<br />
                    <img src="http://distancebetweentwopoints.com/wp-content/uploads/2013/10/distance-formula-between-two-points-example.gif" />
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <canvas 
                            ref="canvas" 
                            onClick={this.createPoints}
                            className="canvas"
                        >
                        </canvas>
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
                            <h2>Number of lines: {this.getNumberLines()}</h2>
                            <ul>
                                {this.state.lines.map((val, i) => {
                                    return (
                                        <li key={i}>
                                            {`Line ${i + 1} length ${this.calculateLineLength(val.firstPoint, val.secondPoint)}`}
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