import React, { useState , useContext} from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
const [text, setText] = useState('');
const {dispatch} = useContext(TodoContext);

const submitForm = (e) => {
    e.preventDefault();
    if(text){
        dispatch({type: 'ADD_TODO', payload: {id: Date.now(), text}});
        setText('');
    }
    
}
  return (
   <form onSubmit={submitForm}>
    <input type='text' value={text} className='input-field'
        placeholder = 'Add a Todo'
        onChange={(e)=>setText(e.target.value)}/>
    <button className='sub-btn'>Add Todo</button>
   </form>
  )
}

export default TodoForm;
