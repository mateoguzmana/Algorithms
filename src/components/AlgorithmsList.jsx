import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
          <table className="table table-hover">
              <thead>
                  <th>Name</th>
              </thead>
              <tbody>
                  <tr>
                      <td>Test</td>
                  </tr>
              </tbody>
          </table>
      </div>
    );
  }
}
