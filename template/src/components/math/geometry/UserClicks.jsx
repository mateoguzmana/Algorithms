import React, { Component } from 'react';
import Description from '../../Description';

export default class UserClicks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            positions: [],
            recording: false
        };
        this.createPoints = this.createPoints.bind(this);
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

        ctx.fillRect(pos.x, pos.y, 10, 10);
        ctx.stroke();

        let points = this.state.points + 1;

        let positions = this.state.positions.slice();
        positions.push({
            x: pos.x,
            y: pos.y,
            hour: new Date()
        });

        this.setState({
            points: points,
            positions: positions
        }, () => {
            console.log(this.state.positions)
        });
    }

    setFalse() {
        this.setState({
            recording: false
        });
    }

    setTrue() {
        let c = this.refs.canvas;
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);

        this.setState({
            recording: true,
            points: 0,
            positions: []
        });
    }

    toggleRecord() {
        this.state.recording ? this.setFalse() : this.setTrue()
    }

    render() {
        return (
            <div>
                <Description title={"User Clicks"}>
                    - User clicks record.
                </Description>
                <div className="row">
                    <div className="col-sm-6">
                        <canvas
                            ref="canvas"
                            onClick={this.createPoints}
                            className="canvas"
                            style={{ display: this.state.recording ? 'block' : 'none' }}
                        >
                        </canvas>
                    </div>
                    <div className="col-sm-6">
                        <button
                            onClick={() => this.toggleRecord()}
                            className={this.state.recording ? 'btn btn-danger' : 'btn btn-info'}
                        >
                            {this.state.recording ? 'Stop' : 'Record'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}