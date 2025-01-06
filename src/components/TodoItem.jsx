import styles from "./todoitem.module.css"
function TodoItem({Item , todos , setTodos }) {
    function handleDelete(item){

        setTodos(todos.filter(todoItem => todoItem.name !== item ))
    }

    function handleStatus(item){
       setTodos( todos.map((todo) => 
            todo.name === item.name? {...todo , done : !todo.done} : todo ))
        
    }
    const ClassName = Item.done ? styles.status : "";
   
    
    return (  
        <>
        <div className={styles.container}>
    <li onClick={() => handleStatus(Item)} className={styles.item}>
    <span className={ClassName}> {Item.name}</span>
    </li>
   
    <button onClick={()=>handleDelete(Item.name)} className={styles.deletebutton}>X</button>
    </div>
    <hr />
   
   
        </>

    )
}
export default TodoItem;