import React from 'react';
import ToDoForm from '../todo_list/todo_form';
import { uniqueId } from '../../util/util';
import { fetchTodos } from '../../actions/todo_actions';
import TodoListItem from '../todo_list/todo_list_item';

module.exports = (props) => {
    return (
      // items
      <div>
        <ul>
          {
            props.todos.map((todo,i) => (
              // how do we include an id?
              <TodoListItem key={uniqueId() * todo.id} todo={todo} />
            ))
          }
        </ul>
        <ToDoForm receiveTodo={props.receiveTodo} />
      </div>
    );
  };

export class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
}
