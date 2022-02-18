import React,{ useState, useEffect } from 'react';
import './App.css';
import Form from './comps/Form';
import TodoList from './comps/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
      getLocalTodos()
    },[])
  
  useEffect(() => {
    handleFilter();
    saveLocalStorage();
  },[todos, isCompleted])


  const handleFilter = () =>{
    switch(isCompleted){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
        default: 
        setFilterTodos(todos)
        break;

    }
  }
  
  const saveLocalStorage = () =>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
    let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoFromLocal);
    }
  }

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
      setIsCompleted={setIsCompleted}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filterTodos={filterTodos}
       />
    </div>
  );
}

export default App;
