import React from 'react';
import { Checkbox, List } from 'antd';

import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

import styles from './todo-list.module.scss';

const TodoListWithSaga = ({ toggleTodo, ...props }) => {
  const { todos } = props;
  console.log('');
  const computeTodoCount = computedTodos => {
    const done = computedTodos.filter(todo => todo.attributes.done).length;
    const total = computedTodos.length;
    return { done, total };
  };
  const todoCount = computeTodoCount(todos);

  return (
    <List
      className={styles['lining']}
      header={<h1>To do list created with Redux Saga</h1>}
      footer={
        <div>
          Completed: {todoCount.done} / {todoCount.total}
        </div>
      }
      bordered
      dataSource={todos}
      renderItem={(todo, index) => {
        return (
          <List.Item className="todo" key={todo.id}>
            <Checkbox
              checked={todo.attributes.done}
              onChange={() => toggleTodo({ todo, index })}
            >
              {todo.attributes.title}
            </Checkbox>
          </List.Item>
        );
      }}
    />
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  const { todos, ...otherState } = state;
  console.log(todos);
  return { todos, ...otherState };
};

const mapDispatchToProps = { toggleTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListWithSaga);
