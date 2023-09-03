import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';
function App() {
  const todos = [
    new Todo("Learn react"),
    new Todo("Learn typescript")
  ]

  const addTodoHandler = (todoText: string) => {

  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
