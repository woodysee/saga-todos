import { call, put, takeLatest } from 'redux-saga/effects';
import initialTodos from '../components/mock-todos.json';

const mockAPI = {
  fetchInitialTodos: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(initialTodos);
      }, 5000);
    });
  }
};

// worker Saga: will be fired on FETCH_INITIAL_TODOS action
function* fetchInitialTodos() {
  try {
    const initialTodos = yield call(mockAPI.fetchInitialTodos);
    yield put({
      type: 'FETCH_INITIAL_TODOS__SUCCESS',
      payload: { todos: initialTodos }
    });
  } catch (error) {
    yield put({ type: 'FETCH_INITIAL_TODOS__FAIL', message: error.message });
  }
}

/*
  Starts fetchInitialTodos on each dispatched `FETCH_INITIAL_TODOS` action.
  Allows concurrent fetches of initial todos.
*/
function* todoSaga() {
  yield takeLatest('FETCH_INITIAL_TODOS', fetchInitialTodos);
}

export default todoSaga;
