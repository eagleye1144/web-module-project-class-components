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
                    {props.task.map( task => (
                        <Todo toggleTask = {props.toggleTask} key = {task.id} todo={task}/>
                    ))}
                    <button onClick={handleClick} className = 'clear-btn'>
                        Clear Finished To-do's
                    </button>
                </div>

            )



    }

export default TodoList