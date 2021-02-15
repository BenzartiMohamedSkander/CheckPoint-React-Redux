
import './App.css';
import {useState} from 'react'
import AddTodo from './Components/AddTodo/AddTodo';
import FilterTodo from './Components/FilterTodo/FilterTodo';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);
  return (
    <div >
<AddTodo/>
<div style={{ textAlign: "center" }}>
  <FilterTodo setDone={setDone} setUndone={setUndone} />
      
      </div>
<TodoList  done={done} unDone={unDone}/>
    </div>
  );
}

export default App;
