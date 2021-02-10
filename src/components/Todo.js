import React from 'react'


function Todo({text, todo, todos, setTodos}){
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    const completedTodo = () => {
        if (todo.completed) {
            return 'completed';
        }
        else return '';
    }

    return(
        <div className="todo">
            <li className={"todo-item " + completedTodo()} >{text}</li>
            <button onClick={completeHandler}>*</button>
            <button onClick={deleteHandler}>-</button>
        </div>
    );
}

export default Todo;