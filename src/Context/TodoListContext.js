import React,{createContext,useState,useReducer} from 'react';
import { todosReducer } from '../Reducer/todosReducer';
export const TodolistContext=createContext();

const TodoListContextProvider=({children})=>{
 
   const [todos,dispatch]=useReducer(todosReducer,[
    {
        text: 'Plan the family trip', id:1

    },
    {text:'Go shopping for dinner', id:2},
    { 
        text:'Go for a walk', id:3
    },
   ]);

    
 return(
     <TodolistContext.Provider value={{todos,dispatch}}>
         {children}
     </TodolistContext.Provider>
 )
}

export default TodoListContextProvider;