import React, { Component } from 'react';
import Description from '../../Description';

export default class UserClicks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            points: 0,
            positions: [],
            recording: false,
            play: false,
            runningRecord: false,
            runChronometer: false
        };
        this.createPoints = this.createPoints.bind(this);
    }

    componentDidMount() {
        this.startChronometer();
    }

    startChronometer() {
        setInterval(() => {
            this.setState({
                seconds: this.state.runChronometer ? 
                    this.state.seconds + 1 
                    : 
                    this.state.seconds
            })
        }, 1000)
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
            second: this.state.seconds
        });

        this.setState({
            points: points,
            positions: positions
        }, () => {
            console.log(this.state.positions)
        });
    }

    setFalse() {
        let c = this.refs.recordingCanvas;
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);

        this.setState({
            recording: false,
            play: true,
            runChronometer: false,
            seconds: 0
        });
    }

    setTrue() {
        let c = this.refs.canvas;
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);

        this.setState({
            recording: true,
            play: false,
            runningRecord: false,
            runChronometer: true,
            points: 0,
            positions: [],
            seconds: 0
        });
    }

    toggleRecord() {
        this.state.recording ? this.setFalse() : this.setTrue()
    }

    play() {
        this.setState({
            runningRecord: true,
            runChronometer: true
        });

        let c = this.refs.recordingCanvas;
        let ctx = c.getContext("2d");
        let lastPosition = this.state.positions.length - 1;

        this.state.positions.map((point, index) => {
                setTimeout(() => {
                    ctx.fillRect(point.x, point.y, 10, 10);
                    ctx.stroke();

                    if(index == lastPosition) {
                        setTimeout(() => {
                            this.setState({
                                runningRecord: false,
                                runChronometer: false,
                                seconds: 0
                            });
                        }, 1000);
                    }
                }, point.second * 1000);
        })
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
                        <canvas
                            ref="recordingCanvas"
                            className="canvas"
                            style={{ display: this.state.runningRecord ? 'block' : 'none' }}
                        >
                        </canvas>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-sm-3">
                            <button
                                onClick={() => this.toggleRecord()}
                                className={this.state.recording ? 'btn btn-danger' : 'btn btn-info'}
                            >
                                {this.state.recording ? 'Stop' : 'Record'}
                            </button>
                        </div>
                        <div className="col-sm-3">
                            <button
                                onClick={() => this.play()}
                                className={'btn btn-success'}
                                style={{ display: this.state.play ? 'block' : 'none' }}
                            >
                                Play
                        </button>
                            <div className="col-sm-6">
                                <h2>{this.state.seconds}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}