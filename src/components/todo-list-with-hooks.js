import React, { useState, useEffect } from 'react';
import { Checkbox, List } from 'antd';

import styles from './todo-list.module.scss';

const TodoListWithHooks = ({ initialTodos }) => {
  const [todos, setTodos] = useState([]);
  const [async, setAsync] = useState({
    loading: true,
    success: false
  });
  useEffect(() => {
    const initialTodosHasLoaded = initialTodos.length > 0;
    if (initialTodosHasLoaded) {
      setAsync({
        loading: false,
        success: true
      });
    }
    setTodos(initialTodos);
  }, [initialTodos]);
  const toggleTodoCompletion = (todos, todoId) => {
    const updatedTodos = [...todos];
    const location = updatedTodos.findIndex(({ id }) => id === todoId);
    const { done, ...otherTodoAttributes } = updatedTodos[location].attributes;
    updatedTodos[location].attributes = {
      done: !done,
      ...otherTodoAttributes
    };
    setTodos(updatedTodos);
  };
  const computeTodoCount = computedTodos => {
    const done = computedTodos.filter(todo => todo.attributes.done).length;
    const total = computedTodos.length;
    return { done, total };
  };
  const todoCount = computeTodoCount(todos);

  const loadingToRender = (
    <List
      className={styles['lining']}
      header={<h1>To do list created with Hooks</h1>}
      footer={
        <div>
          Completed: {todoCount.done} / {todoCount.total}
        </div>
      }
      bordered
      dataSource={['Loading']}
      renderItem={todo => (
        <List.Item className="todo" key={todo}>
          Loading
        </List.Item>
      )}
    />
  );
  const todosToRender = (
    <List
      className={styles['lining']}
      header={<h1>To do list created with Hooks</h1>}
      footer={
        <div>
          Completed: {todoCount.done} / {todoCount.total}
        </div>
      }
      bordered
      dataSource={todos}
      renderItem={todo => (
        <List.Item className="todo" key={todo.id}>
          <Checkbox
            checked={todo.attributes.done}
            onChange={() => toggleTodoCompletion(todos, todo.id)}
          >
            {todo.attributes.title}
          </Checkbox>
        </List.Item>
      )}
    />
  );

  if (async.loading) {
    return loadingToRender;
  }

  return todosToRender;
};

export default TodoListWithHooks;
