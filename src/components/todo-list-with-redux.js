import React from 'react';
import isEqual from 'lodash/isEqual';
import { Checkbox, List } from 'antd';

import { connect } from 'react-redux';
import { toggleTodo, requestInitialTodos } from '../redux/actions';

import styles from './todo-list.module.scss';

const mapStateToProps = (state /*, ownProps*/) => {
  return state;
};

const mapDispatchToProps = { toggleTodo, requestInitialTodos };

class TodoListWithRedux extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.props.requestInitialTodos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props.todos, prevProps.todos)) {
      this.setTodos(this.props.todos);
    }
    if (!isEqual(this.state.todos, prevState.todos)) {
      console.log("I don't see this when todo is checked");
    }
  }

  setTodos = todos => {
    this.setState({
      todos
    });
  };

  toggleTodoCompletion = ({ todo, index }) => {
    const updatedTodo = { ...todo };
    // this.setState({ todos: updatedTodos });
    this.props.toggleTodo({ index, todo: updatedTodo });
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
