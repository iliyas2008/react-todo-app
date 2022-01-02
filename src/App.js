import React from "react";
import AddTodo from "./AddTodo";
import './App.css';
import Header from "./Header";

class App extends React.Component{
    
    render(){
        return(
            <>
            <Header />
            <AddTodo />
            </>
        )
    }
}
export default App;