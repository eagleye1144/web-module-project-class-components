import React from 'react';
import TodoList from '../src/components/TodoList'

const tasks = [
  {task: "Learn Stuff",
   id: 1,
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

  toggleTask = ()=> {
    const newTask = this.state.task;
    newTask[0].completed = !newTask[0].completed;
    this.setState({
      newTask
    });

  }

  render() {
    return (



      <div>
        <TodoList task = {this.state.task} id = {this.state.id} completed = {this.state.completed} toggleTask = {this.toggleTask}/>
      </div>
    );
  }
}

export default App;
