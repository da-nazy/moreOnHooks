import React from 'react';
import Navbar from './Component/Navbar';
import Todolist from './Component/Todolist';
import ThemeContextProvider from './Context/ThemeContext';
import AuthContextProvider from './Context/AuthContext';
import TodoListContextProvider from './Context/TodoListContext';
function App() {
  return (
    <div className="App">
     <div className="ui raised very padded text container segment">
     <AuthContextProvider>
       <TodoListContextProvider>
     <ThemeContextProvider>
     <Navbar/>
     <Todolist/>
     </ThemeContextProvider>
     </TodoListContextProvider>
     </AuthContextProvider>
     
     </div>
    </div>
  ); 
}

export default App;
