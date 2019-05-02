import { createStore, applyMiddleware, compose } from 'redux';

import todoApp from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoApp,
  window.STATE_FROM_SERVER /* Optional preloaded state */,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    /* Show store on redux dev tools. TODO: Hide in production. */
  )
);
export { store as reduxStore };
