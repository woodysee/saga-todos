import React, { useState } from 'react';
import { Checkbox, List } from 'antd';
import initialTodos from './mock-todos.json';

import styles from './todo-list.module.scss';

function TodoList() {
  const [todos, setTodos] = useState(initialTodos.data);
  // console.log(todos);
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
  const computeTodoCount = todos => {
    const done = todos.filter(todo => todo.attributes.done).length;
    const total = todos.length;
    return { done, total };
  };
  const todoCount = computeTodoCount(todos);

  return (
    <List
      className={styles['wrapper']}
      header={<h1>To do list</h1>}
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
}

export default TodoList;
