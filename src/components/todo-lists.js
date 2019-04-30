import React, { useState, useEffect } from 'react';

import TodoListWithHooks from './todo-list-with-hooks';
import TodoListWithRedux from './todo-list-with-redux';

import initialTodos from './mock-todos.json';

import styles from '../app.module.scss';

const TodoLists = () => {
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

export default TodoLists;
