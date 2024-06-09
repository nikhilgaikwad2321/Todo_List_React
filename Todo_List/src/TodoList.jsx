import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo, id:uuidv4(), isDone:false}]
        });//adding the value of newTode into the array
        setNewTodo("");//after adding value we get input field empty as below 
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);   //updating the value of variable newTode
    }

    let deleteTask=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id != id));   //we use filter amd map method in react for deleteing and showwing all this is mentioned in react documents
    }
    
    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                } else {
                    return todo;
                }
            })
        );
    };

    return(
        <>
        <div>
            <h1>Todo List </h1>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}> <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <button onClick={()=> deleteTask(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=> markAsDone(todo.id)}>Mark As Done</button>
                    </li> 
                ))}
            </ul>
        </div>
        </>
    );
}