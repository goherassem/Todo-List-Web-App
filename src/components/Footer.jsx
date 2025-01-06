import Styles from './Footer.module.css'
function Footer({CompletedTodos, AllTodos}) {
    
    
    
    return (  

        <div className={Styles.footer}>
            <h3 className={Styles.footerText}>Completed Todos: {CompletedTodos} Total Todos: {AllTodos}   </h3>
        </div>
    );
}

export default Footer;