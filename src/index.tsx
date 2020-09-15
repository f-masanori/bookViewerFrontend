import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducer from './reducer/index';
import rootSaga from './sagas/bookViewer';
import 'semantic-ui-css/semantic.min.css';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// reduxの監視
// ActionがdispatchされてからReducerの処理が実行されるまでの間に、処理を挿入できる
sagaMiddleWare.run(rootSaga);
