import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Algorithms from './components/Algorithms';

window.onload = () => {
  ReactDOM.render(
    <div>
      <HashRouter>
        <Algorithms />
      </HashRouter>
    </div>,
    document.querySelector('#container')
  );
};
