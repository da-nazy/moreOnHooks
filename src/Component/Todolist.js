import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
class Todolist extends React.Component{
    static contextType=ThemeContext;

    render(){
        const {isDarkTheme,lightTheme,darkTheme} =this.context;
        const theme =isDarkTheme?darkTheme:lightTheme;
        return(
            <div style={{background:theme.background,color:theme.text,height:'140px',textAlign:'center'}} className="ui list">
             <p className="item" style={{borderWidth:1,borderColor:'#000',borderStyle:'solid'}}> Plan the family trip</p>
             <p className="item">Go shopping for dinner</p>
             <p className="item"> Go for a walk</p>
            </div>
        )
    }
}
export default Todolist;