import React, { Component } from 'react';

export default class BinaryGap extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h2>Binary Gap</h2>
                <div className="row"> 
                    <div className="col-sm-6">
                        <div className="col-sm-12">
                            <label htmlFor="input">Input</label>
                            <input type="text" id="input" className="form-control" placeholder="Please write a number here" value=""/>    
                        </div> 
                        <div className="col-sm-12">
                            <br/>
                            <button className="btn btn-info btn-block">Run</button>
                        </div>
                    </div> 
                    <div className="col-sm-6" id="divOutput">

                    </div> 
                </div>
            </div>
        );
    }
}
