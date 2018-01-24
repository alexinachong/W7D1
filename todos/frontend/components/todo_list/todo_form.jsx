import React from 'react';
import {uniqueId} from '../../util/util';

class ToDoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTodo(property) {
    return e => this.setState( {[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    // why is receiveTodo on props? Where does it come from?
    console.log(todo);
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: '',
      done: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.updateTodo('title')}/>

        <label htmlFor="body">Body</label>
        <input id="body" type="text" value={this.state.body} onChange={this.updateTodo('body')}/>

        <button>Submit</button>
      </form>
    );
  }

}

export default ToDoForm;
