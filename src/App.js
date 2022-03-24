import {useState} from 'react';
import './App.css';
import SubmitBox from './components/SubmitBox';
import TaskRow from './components/TaskRow';


function App() {
  const [todos, setTodos] = useState(["eat", "sleep", "code"]);

  const addTodo = (name) => {
    setTodos([...todos, name]);
  };

  const deleteTodo = (name) => {
      const newTodos = todos.filter(todo => todo != name);

      setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <SubmitBox addTodo={addTodo} />
      <br></br>
      {todos.map(todo => (
        <TaskRow className="todo" name={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default App;
