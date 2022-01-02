import React from "react";
import ShowTodo from "./ShowTodo";

class AddTodo extends React.Component{
    constructor(){
        super()
        this.state={
            update:false,
            todoName:"",
            todoStatus:false,
            todoArr:[]
        }
    }

    handleAdd = ()=>{

        const randId = Math.floor(Math.random()*1000)
        const newData = {id:randId, todoName:this.state.todoName, todoStatus:false}
        const updatedData = this.state.todoArr.map((data)=>{
            if(this.state.newId === data.id){
                return {...data, todoName:this.state.todoName, todoStatus:this.state.todoStatus}
            }
            return data;
        })

        if(!this.state.todoName){   
            alert("Enter a name to proceed ...!")
        }else{
            if(this.state.update){
                this.setState({
                    todoArr:updatedData,
                    todoName:"",
                    update:false
                })
            }else{
                this.setState({
                    todoArr:[...this.state.todoArr, newData],
                    todoName:""
                })
            }
        }
    }
    handleUpdate = (resData) => {
        const foundObj = this.state.todoArr.find((obj)=>obj.id===resData)
        console.log(foundObj)
        this.setState({
            update: true,
            newId: foundObj.id,
            todoStatus:foundObj.todoStatus,
            todoName:foundObj.todoName
        })


    }

    handleChange = (event)=>{
        this.setState({todoName: event.target.value})
    }
    handleDelete = (recData)=>{
        const foundObj = this.state.todoArr.find((obj)=>obj.id===recData) 
        if(window.confirm(`Are you sure to delete ${foundObj.todoName} !`)){
            const selData = this.state.todoArr.filter((item)=>item.id!==recData)
            this.setState({
                todoArr:selData
            })
        }
    }

    handleClearAll = ()=>{
        if(window.confirm("Are you sure to delete all data !")){
            this.setState({
                todoArr:[]
            })
        }
    }

    handleStatus = (resId)=>{
        console.log(resId)
        const foundObj = this.state.todoArr.find((obj)=>obj.id===resId)
        console.log(foundObj)

        if(foundObj.todoStatus===false){

            const updatedStatus = this.state.todoArr.map((data)=>{
                if(data.id===resId){
                    return {...data, todoStatus:true}
                }
                return data;
            }) 
            this.setState({
                todoArr:updatedStatus
            })
        }else{
            const updatedStatus = this.state.todoArr.map((data)=>{
                if(data.id===resId){
                    return {...data, todoStatus:false}
                }
                return data;
            }) 
            this.setState({
                todoArr:updatedStatus
            })
        }
    }

    render(){
        const { todoName, todoStatus, todoArr, update } = this.state
        console.log(todoArr)
        return(
            <>
            <form>
                <div className="container text-center">
                        <div className="row form-group justify-content-center">
                            <div className="col-lg-10 col-md-10 col-sm-10 col-12 my-2">
                            <input type="text" className="form-control" value={todoName} name="todoInput" onChange={this.handleChange} placeholder="Enter a todo name ..." />
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-12 my-2">
                            <button type="button" className="btn btn-primary" onClick={ this.handleAdd }>{update? "Update" : "Add"}</button>
                            </div>
                        </div>
                </div>
                
            </form>
            
            <ShowTodo 
            todoData={{
                todoArr:todoArr, 
                todoStatus:todoStatus,
                handleDelete:this.handleDelete, 
                handleUpdate:this.handleUpdate,
                handleClearAll:this.handleClearAll,
                handleStatus:this.handleStatus
                }} /> 
            </>
        )
    }
}
export default AddTodo;