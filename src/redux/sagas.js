import { all, call, put, takeLatest } from 'redux-saga/effects';

import { todoActionTypes } from './actions';

import initialTodos from '../components/mock-todos.json';

const {
  FETCH_INITIAL_TODOS,
  FETCH_INITIAL_TODOS__SUCCESS,
  FETCH_INITIAL_TODOS__FAILED
} = todoActionTypes;

const api = {
  fetchInitialTodos: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(initialTodos);
        // reject({
        //   error: {
        //     message: 'Unable to retrieve data'
        //   }
        // });
      }, 5000);
    });
  }
};

function* fetchInitialTodos() {
  try {
    const response = yield call(api.fetchInitialTodos);
    if (response.error) {
      throw new Error(response.error);
    }
    yield put({
      type: FETCH_INITIAL_TODOS__SUCCESS,
      payload: { todos: response.data }
    });
  } catch (error) {
    yield put({ type: FETCH_INITIAL_TODOS__FAILED, message: error.message });
  }
}

function* watchForFetchedInitialTodos() {
  yield takeLatest(FETCH_INITIAL_TODOS, fetchInitialTodos);
}

export default function* todoSaga() {
  yield all([watchForFetchedInitialTodos()]);
}
