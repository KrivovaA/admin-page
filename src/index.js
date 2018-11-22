import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import './index.css';

firebase.initializeApp({
  apiKey: 'AIzaSyDW-W8Zn5PKV2f0Z3g1sZPBfAqtsUHiD4c',
  authDomain: 'wish-list-623ee.firebaseapp.com',
  databaseURL: 'https://wish-list-623ee.firebaseio.com',
  projectId: 'wish-list-623ee',
  storageBucket: 'wish-list-623ee.appspot.com',
  messagingSenderId: '636861860639'
});


import store from './store';

import App from './components/App';

const render = Component => {
  ReactDOM.render(
    <Provider store={store()}>
      <BrowserRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
    render(require('./components/App'));
  });
}

// ReactDOM.render(<Main />, document.getElementById('app'));