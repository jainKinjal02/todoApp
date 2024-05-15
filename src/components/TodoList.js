import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import  TodoItem  from './TodoItem';

const TodoList = () => {
const {state} = useContext(TodoContext);
  return (
    <div>
        <h2>Your todo list is mentioned below</h2>
        {state.todo.length === 0 ? (
            <p>No todos available. Please add one!</p>
        ) : (
            <ul className='todo-list'>
                {state.todo.map(todo=> <TodoItem key={todo.id} todo={todo}/>)}
            </ul>
        )}
    </div>
  )
}

export default TodoList;
