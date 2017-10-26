import React, { Component } from 'react';

export default class Description extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            {this.props.title}
                            <a className="btn" data-toggle="modal" data-target="#descriptionModal" title="See description">
                                <span className="glyphicon glyphicon-eye-open"></span>
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="modal fade" id="descriptionModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Description</h4>
                            </div>
                            <div className="modal-body">
                                <p>{this.props.children}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
