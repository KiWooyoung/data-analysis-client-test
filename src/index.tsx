import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './pages/AppRouter';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

const rootElement = document.getElementById('root');
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  (window as any).__REDUX_STATE__,
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement,
);

serviceWorker.unregister();
