import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer" 
function Todo() {

    
    const [todos, setTodos] = useState([])
    const CompletedTodos = todos.filter((todo)=> todo.done).length
    const AllTodos = todos.length
 
    

 
   

    return (  
       
        <>

        <Form todos = {todos} setTodos = {setTodos}/>
        <TodoList todos = {todos} setTodos = {setTodos}/>
        <Footer CompletedTodos = {CompletedTodos} AllTodos = {AllTodos}/>







        </>

    );
}

export default Todo;