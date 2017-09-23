import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

ReactDOM.render(
  <p>Hello!</p>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
