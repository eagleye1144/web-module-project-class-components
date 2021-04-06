import React from 'react';
import Todo from './Todo'
import '../components/Todo.css'


const TodoList = props => {

    const handleClick = () =>{
        props.clearCompleted();
    }


        return (
        
                <div className = "Todo-List">
                <h2>To-do list:</h2>
                    {props.task.map( item => (
                        <Todo toggleTask = {props.toggleTask} key = {item.id} todo={item}/>
                    ))}
                    <button onClick={handleClick} className = 'clear-btn'>
                        Clear Finished To-do's
                    </button>
                </div>

            )



    }

export default TodoList