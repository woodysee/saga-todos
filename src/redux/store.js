import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import todoSaga from './sagas';

import todoReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  window.STATE_FROM_SERVER /* Optional preloaded state */,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    /* Show store on redux dev tools. TODO: Hide in production. */
  )
);

sagaMiddleware.run(todoSaga);

export { store as reduxStore };
