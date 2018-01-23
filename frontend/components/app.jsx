import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';
import ToDoForm from './todo_list/todo_form';

const App = () => {
  return (
    <div>
      <TodoListContainer/>
      <ToDoForm />
    </div>
  );
};

export default App;
