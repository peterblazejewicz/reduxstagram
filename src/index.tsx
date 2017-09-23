import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <p>Hello!</p>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
