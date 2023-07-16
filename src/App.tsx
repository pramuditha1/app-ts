import './App.css';
import Todos from './components/todos';
import Todo from './models/todo';

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]

  return (
    <div className="App">
      <Todos items={todos}/>
    </div>
  );
}

export default App;
