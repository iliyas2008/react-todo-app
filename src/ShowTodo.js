import React from "react";
// import "./App.css";

class ShowTodo extends React.Component{
    render(){
        const { todoArr, handleDelete, handleUpdate, handleClearAll, handleStatus } = this.props.todoData
        return(
            <>
                <div className="card text-center">
                    <div className="card-header">
                        {todoArr.length>0? <h1>Your Todo List</h1> : <h1>Nothing to Show</h1>}
                    </div>
                        <div className="card-body">
                        {todoArr.map((data)=>{
                            return(
                            <div className="d-flex justify-content-center mb-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-8 d-flex flex-row">
                                            <div className="form-check form-switch align-self-center">
                                                <input className="form-check-input" type="checkbox"  checked={data.todoStatus} onChange={()=>handleStatus(data.id)} />
                                            </div>
                                                <button type="button" 
                                                style={data.todoStatus? { backgroundColor:"khaki"}: { backgroundColor:"lightgray"}}
                                                className="form-control text-primary" disabled>
                                                    <strong style={data.todoStatus? {textDecoration: "line-through 3px red"}:{textDecoration: "none"}}>{data.todoName}</strong></button>
                                            </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                                            <button className="btn btn-outline-danger" type="button" onClick={()=>handleDelete(data.id)}>Delete</button>
                                            <button className="btn btn-outline-primary" type="button" onClick={()=>handleUpdate(data.id)}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                        </div>
                    <div className="card-footer text-muted">
                        {todoArr.length>0 ? <button type="button" className="btn btn-outline-warning btn-lg" onClick={handleClearAll}>Clear All</button> : "Add at least one item..."}
                    </div>
                </div>

            </>
        )
    }

}
export default ShowTodo;