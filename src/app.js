import React, { Component } from 'react';

import TodoListWithHooks from './components/todo-list-with-hooks';
import TodoListWithReduxSaga from './components/todo-list-with-saga';

import styles from './app.module.scss';
class App extends Component {
  render() {
    return (
      <div className={styles['lining']}>
        <TodoListWithHooks />
        <TodoListWithReduxSaga />
      </div>
    );
  }
}

export default App;
