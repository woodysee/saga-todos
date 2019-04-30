import React, { useState, useEffect } from 'react';

import TodoListWithHooks from './components/todo-list-with-hooks';
import TodoListWithRedux from './components/todo-list-with-redux';

import initialTodos from './components/mock-todos.json';

import styles from './app.module.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const retrieveTodosFromMockAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(initialTodos.data);
      }, 2000);
    });
  };
  useEffect(() => {
    retrieveTodosFromMockAPI().then(fetchedTodos => {
      // console.log('Setting todos...');
      setTodos(fetchedTodos);
    });
  });
  return (
    <div className={styles['lining']}>
      <TodoListWithHooks initialTodos={todos} />
      <TodoListWithRedux />
    </div>
  );
};

export default App;
