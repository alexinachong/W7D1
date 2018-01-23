import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <ul>
        {
          this.props.todos.map((todo,i) => (
            <li key={i}>{todo.title}</li>
          ))
        }
      </ul>
    );
  }
}

export default TodoListItem;
