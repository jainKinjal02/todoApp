import logo from './logo.svg';
import './App.css';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
   
      <TodoProvider>
        <div className='App'>
          <h1>Todo App</h1>
          <TodoForm />
          <br />
          <TodoList />
        </div>
      </TodoProvider>
  
  );
}

export default App;
