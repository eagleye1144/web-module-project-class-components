import React from 'react';
import TodoList from '../src/components/TodoList'
import TodoForm from '../src/components/TodoForm'

const tasks = [
  {task: "Learn Stuff",
   id: 0,
   completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      task:tasks
    }
  }

  toggleTask = (id)=> {
    const newTask = this.state.task.map(task => {
      if (task.id === id) {
        return( {
          ...task,
          completed: !task.completed
        })
      } else{
        return task
      }
    })
    console.log(newTask)
    this.setState({
      task:newTask
    });

  }

  addTodo = (todoName) => {
    this.setState({
      task: [...this.state.task, {
        task: todoName,
        id: this.state.task.length,
        completed: false
      }]
    })
  }


clearCompleted = e => {
  this.setState({
    task: this.state.task.filter(item =>{
      return(item.completed === false)
    })
  })

}

  render() {
    return (



      <div>
        <div>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList clearCompleted = {this.clearCompleted} task = {this.state.task}
         id = {this.state.id} completed = {this.state.completed} toggleTask = {this.toggleTask}/>
      </div>
    );
  }
}

export default App;
