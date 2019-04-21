import { createStore } from 'redux';

import todoApp from './reducers';

const store = createStore(
  todoApp,
  window.STATE_FROM_SERVER /* Optional preloaded state */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* Show store on redux dev tools. TODO: Hide in production. */
);
export { store as reduxStore };
