import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Container from './components/Container';

window.onload = () => {
  ReactDOM.render(
    <div>
      <HashRouter>
        <Container />
      </HashRouter>
    </div>,
    document.querySelector('#container')
  );
};
