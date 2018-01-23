import React from 'react';

class ToDoForm extends React.Component {
  constructor (props) {
    super();
    this.state = {
      title: "",
      body: "",
      done: false
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title"></input>

        <label htmlFor="body">Body</label>
        <input type="text" id="body"></input>
      </form>
    );
  }

}

export default ToDoForm;
