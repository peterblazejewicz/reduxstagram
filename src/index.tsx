import './styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Single from './components/Single';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Main} />
        <Route exact={true} path="/" component={PhotoGrid} />
        <Route path="/view/:id" component={Single} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')!,
);
registerServiceWorker();
