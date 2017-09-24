import './styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Single from './components/Single';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Main} />
      <Route exact={true} path="/" component={PhotoGrid} />
      <Route path="/view/:id" component={Single} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')!,
);
registerServiceWorker();

{
  // tslint:disable-next-line:no-unused-expression
  store;
}
