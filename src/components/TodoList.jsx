import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({todos , setTodos}){


    const sotrtedtodos = todos.slice().sort((a,b) => Number(a.done) - Number(b.done))
    
    return <>
<ul className={styles.Todolist}>
{
    sotrtedtodos.map((element) =>(
<TodoItem key={element.name} Item = {element} todos ={todos} setTodos= {setTodos} />
)
)
}
</ul>
</>


}