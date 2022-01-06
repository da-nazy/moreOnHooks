import React,{useContext,useState} from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { TodolistContext } from '../Context/TodoListContext';


const Todolist=()=>{

    const [todo,setTodo]=useState('');
    const {todos,dispatch}=useContext(TodolistContext);
    const {isDarkTheme,lightTheme,darkTheme,changeTheme}=useContext(ThemeContext);
    const theme =isDarkTheme?darkTheme:lightTheme;

    const handleChange=(e)=>{
         //  console.log(e.target.value);
           setTodo(e.target.value);
    }
     const handleFormSubmit=(e)=>{
        // prevent default behaviour of the form element
        e.preventDefault();
       // addTodo(todo);
       dispatch({type:'ADD_TODO',text:todo})
     }
     const handleRemoveTodo=(e)=>{
         const id =e.target.id;
       //  removeTodo(id);
       dispatch({type:'REMOVE_TODO',id});
     }
    return(
        <div style={{background:theme.background,color:theme.text,textAlign:'center',marginTop:'0px'}} className="ui list">
        {todos.length?(
            todos.map((e,i)=>{
                return(
                    <p  id={e.id} onClick={handleRemoveTodo} key={i} className="item" >{e.text}</p>
                )
            })
        ):<div>You have no todo</div>}
      
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo">Add todo:</label>
            <input type="text" id="todo" onChange={handleChange}/>
            <input type="submit" value="Add new todo"  className="ui button primary"/>
            </form>
        <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
       </div>
    );
}
export default Todolist;