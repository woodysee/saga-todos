import React, { Component } from 'react';

import TodoListWithHooks from './components/todo-list-with-hooks';
import TodoListWithRedux from './components/todo-list-with-redux';

import styles from './app.module.scss';
class App extends Component {
  render() {
    return (
      <div className={styles['lining']}>
        <TodoListWithHooks />
        <TodoListWithRedux />
      </div>
    );
  }
}

export default App;
