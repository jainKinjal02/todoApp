import { createContext, useReducer } from "react";

export const TodoContext = createContext(); // uppercase


const initialState = {
    todo: []
}


const todoReducer = (state, action)=> {
    switch(action.type){
        case 'ADD_TODO':
            return {...state , todo :[...state.todo, action.payload] };
        case 'REMOVE_TODO':
            return {...state, todo: state.todo.filter(item => item.id !== action.payload)};
        default:
            return state;
    }

}

// upperCase Provider
export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}