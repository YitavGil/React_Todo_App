import React,{ useState } from 'react';
import './App.css';
import Form from './comps/Form';
import TodoList from './comps/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      inputText={inputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
