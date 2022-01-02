import React from "react";
import './App.css'

class Header extends React.Component{
    render(){
        return(
            <div className="jumbotron-fluid bg-danger text-white text-center p-3">
                <div className="container">
                    <h1>Todo</h1>
                    <p className="lead">Add your todo list ...</p>
                    <p className="text-warning">Check GitHub <a className="link-info text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://github.com/iliyas2008/react-todo-app">Repo</a></p>
                </div>
           </div>
        )
    }
}
export default Header;