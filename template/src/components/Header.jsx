import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Algorithms</a>
            <a className="navbar-brand" href="#/maths/">Maths Applied</a>
          </div>
        </div>
      </nav>
    );
  }
}
