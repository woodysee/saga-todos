import { todoActionTypes } from './actions';
const {
  TOGGLE_TODO,
  FETCH_INITIAL_TODOS,
  FETCH_INITIAL_TODOS__SUCCESS,
  FETCH_INITIAL_TODOS__FAILED
} = todoActionTypes;

const initialState = {
  asyncs: {
    todos: {
      error: false,
      loading: false,
      success: false,
      message: ''
    }
  },
  todos: []
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
    case FETCH_INITIAL_TODOS: {
      const updatedAsyncs = { ...state.asyncs };
      updatedAsyncs.todos = {
        error: false,
        loading: true,
        success: false,
        message: 'Loading...'
      };
      return { ...state, asyncs: updatedAsyncs };
    }
    case FETCH_INITIAL_TODOS__SUCCESS: {
      const updatedAsyncs = { ...state.asyncs };
      updatedAsyncs.todos = {
        error: false,
        loading: false,
        success: true,
        message: 'Todos successfully retrived from server.'
      };
      console.log(action.payload.todos);
      return { ...state, asyncs: updatedAsyncs, todos: action.payload.todos };
    }
    case FETCH_INITIAL_TODOS__FAILED: {
      const updatedAsyncs = { ...state.asyncs };
      updatedAsyncs.todos = {
        error: true,
        loading: false,
        success: false,
        message: action.message
      };
      return { ...state, asyncs: updatedAsyncs };
    }
    default: {
      return state;
    }
  }
}
