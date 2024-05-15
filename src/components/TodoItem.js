import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoItem = ({todo}) => {
    const {dispatch} = useContext(TodoContext);

    const handleRemove = ()=>{
        return dispatch({type: 'REMOVE_TODO', payload: todo.id})
    };


  return (
   <li className='li-item'>
   {todo.text}
   <button onClick={handleRemove} className='li-btn'>Remove</button>
   </li>
  )
}

export default TodoItem;