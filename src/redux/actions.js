const TOGGLE_TODO = 'TOGGLE_TODO';

export const todoActionTypes = {
  TOGGLE_TODO
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
