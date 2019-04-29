import initialTodos from '../components/mock-todos.json';

import { todoActionTypes } from './actions';
const { TOGGLE_TODO } = todoActionTypes;

const initialState = {
  todos: initialTodos.data
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO: {
      // See https://redux.js.org/basics/reducers#handling-actions
      // Remember not to mutate the state directly. Otherwise it will not trigger componentDidUpdate().
      const updatedTodos = [...state.todos];
      const index = action.attributes.index;
      const { done, ...otherTodoAttributes } = updatedTodos[index].attributes;
      updatedTodos[index].attributes = {
        done: action.attributes.done,
        ...otherTodoAttributes
      };
      return { ...state, todos: updatedTodos };
    }
    default: {
      return state;
    }
  }
}
