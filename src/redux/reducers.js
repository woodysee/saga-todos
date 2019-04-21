import initialTodos from '../components/mock-todos.json';

import { todoActionTypes } from './actions';
const { TOGGLE_TODO } = todoActionTypes;

const initialState = {
  todos: initialTodos.data
};

export default function todoApp(state = initialState, action) {
  const updatedState = { ...state };
  switch (action.type) {
    case TOGGLE_TODO: {
      const index = action.attributes.index;
      const { done, ...otherTodoAttributes } = updatedState.todos[
        index
      ].attributes;
      updatedState.todos[index].attributes = {
        done: action.attributes.done,
        ...otherTodoAttributes
      };
      break;
    }
    default: {
      break;
    }
  }
  return updatedState;
}
