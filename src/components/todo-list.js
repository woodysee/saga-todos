import React, { useState } from 'react';
import { List } from 'antd';
import initialTodos from './mock-todos.json';

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
      className="todos-wrapper"
      header={<h1>List of Todos</h1>}
      footer={
        <div>
          Completed: {todoCount.done} / {todoCount.total}
        </div>
      }
      bordered
      dataSource={todos}
      renderItem={todo => (
        <List.Item className="todo" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.attributes.done}
            onChange={() => toggleTodoCompletion(todos, todo.id)}
          />
          &nbsp;
          {todo.attributes.title}
        </List.Item>
      )}
    />
  );
}

export default TodoList;
