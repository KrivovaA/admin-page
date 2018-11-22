import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import DevTools from './components/DevTools';
import thunk from 'redux-thunk';

let store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  ));
export default function() {

  if(module.hot) {
    module.hot.accept('./rootReducer.js', () => {
      console.log('store.js HMR');
      const newReducer = require('./rootReducer.js').default;
      store.replaceReducer(newReducer);
    });
  }

  return store;
}
