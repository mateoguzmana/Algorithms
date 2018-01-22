import React, { Component } from 'react';
import Description from '../../Description';

export default class Lines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            positions: []
        };
        this.createPoints = this.createPoints.bind(this);
    }

    createLine(firstPos, secondPos) {
        let c = this.refs.canvas;
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
        let c = this.refs.canvas;
        let ctx = c.getContext("2d");

        let width = this.rectSize.value;

        ctx.lineWidth = width;
        let pos = this.getMousePos(c, event);

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
                        <label htmlFor="rectSize">Rect Size</label><br />
                        <select name="rectSize" id="rectSize" ref={ref => this.rectSize = ref}>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}