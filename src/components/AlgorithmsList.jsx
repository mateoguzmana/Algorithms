import React, { Component } from 'react';
import AlgorithmsJsonList from '../data/AlgorithmsJsonList';

export default class AlgorithmsList extends Component {
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            AlgorithmsJsonList.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.author}</td>
                                        <td>
                                            <button className="btn btn-info">
                                                View
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
