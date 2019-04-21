import React, { useState } from 'react';
import { Checkbox, List } from 'antd';

import initialTodos from './mock-todos.json';

import styles from './todo-list.module.scss';

const TodoListWithHooks = () => {
  const [todos, setTodos] = useState(initialTodos.data);
  const toggleTodoCompletion = (todos, todoId) => {
    const updatedTodos = [...todos];
    const location = updatedTodos.findIndex(({ id }) => id === todoId);
    const { done, ...otherTodoAttributes } = updatedTodos[location].attributes;
    updatedTodos[location].attributes = {
      done,
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

  return (
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
};

export default TodoListWithHooks;
