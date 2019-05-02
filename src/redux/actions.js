const TOGGLE_TODO = 'TOGGLE_TODO';
const FETCH_INITIAL_TODOS = 'FETCH_INITIAL_TODOS';
const FETCH_INITIAL_TODOS__SUCCESS = 'FETCH_INITIAL_TODOS__SUCCESS';
const FETCH_INITIAL_TODOS__FAILED = 'FETCH_INITIAL_TODOS__FAILED';

export const todoActionTypes = {
  TOGGLE_TODO,
  FETCH_INITIAL_TODOS,
  FETCH_INITIAL_TODOS__SUCCESS,
  FETCH_INITIAL_TODOS__FAILED
};

export function toggleTodo({ index, todo }) {
  return {
    type: TOGGLE_TODO,
    attributes: {
      index,
      done: !todo.attributes.done
    }
  };
}
