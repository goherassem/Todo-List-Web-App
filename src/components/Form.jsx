import { useState } from "react";
import styles from "./form.module.css"
export default function Form({todos ,setTodos}){
    const [todo,setTodo ] = useState({name: "" , done: false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name : ""})
        
    }
    return <>

        <form className = {styles.todoForm} action=""  onSubmit={handleSubmit}>

<input className={styles.modernInput} placeholder="please enter note" onChange={(e)=>setTodo({name:e.target.value , done:false})} value = {todo.name} type="text"  />
<button className={styles.modernButton} type="submit">Add</button>

</form>

    </>


}