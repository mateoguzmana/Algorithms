import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MathsJsonList from '../../data/lists/MathsJsonList';

export default class MathsList extends Component {
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MathsJsonList.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.author}</td>
                                        <td>
                                            <button className="btn btn-info">
                                                <Link style={{ color: "white" }} to={`/math/${data.id}`}>View</Link>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
