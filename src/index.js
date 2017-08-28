import React from 'react';
import ReactDOM from 'react-dom';
import Algorithms from './components/Algorithms';

window.onload = () => {
  ReactDOM.render(
    <div>
        <Algorithms/>
    </div>,
    document.querySelector('#container')
  );
};
