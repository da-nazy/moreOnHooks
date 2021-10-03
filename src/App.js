import React from 'react';
import Navbar from './Component/Navbar';
import Todolist from './Component/Todolist';
import ThemeContextProvider, { ThemeContext }  from './Context/ThemeContext';
function App() {
  return (
    <div className="App">
     <div className="ui raised very padded text container segment">
     <ThemeContextProvider>
     <Navbar/>
     <Todolist/>
     </ThemeContextProvider>
     
     </div>
    </div>
  ); 
}

export default App;
