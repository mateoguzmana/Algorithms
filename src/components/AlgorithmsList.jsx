import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AlgorithmsJsonList from '../data/AlgorithmsJsonList';

export default class AlgorithmsList extends Component {
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
                            AlgorithmsJsonList.map((data, index) => {
                                let id = index+1;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.author}</td>
                                        <td>
                                            <button className="btn btn-info">
                                                <Link to={`/view/${id}`}>View</Link>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
