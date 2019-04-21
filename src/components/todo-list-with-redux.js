import React from 'react';
import { Checkbox, List } from 'antd';

import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

import styles from './todo-list.module.scss';

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
};

const mapDispatchToProps = { toggleTodo };

class TodoListWithRedux extends React.Component {
  state = {
    todos: this.props.todos
  };

  toggleTodoCompletion = ({ todo, index }) => {
    const updatedTodos = [...this.props.todos];
    const { done, ...otherTodoAttributes } = updatedTodos[index].attributes;
    updatedTodos[index].attributes = {
      done: !done,
      ...otherTodoAttributes
    };
    this.setState({ todos: updatedTodos });
  };

  computeTodoCount = computedTodos => {
    const done = computedTodos.filter(todo => todo.attributes.done).length;
    const total = computedTodos.length;
    return { done, total };
  };

  render() {
    const { todos } = this.state;
    const todoCount = this.computeTodoCount(todos);

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
                onChange={() => this.toggleTodoCompletion({ todo, index })}
              >
                {todo.attributes.title}
              </Checkbox>
            </List.Item>
          );
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListWithRedux);
