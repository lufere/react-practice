import React, { Component } from 'react';
import Overview from './components/Overview'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      tasks: [],
      numTasks: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    const newTasks = this.state.tasks;
    this.setState({
      tasks: newTasks.concat(this.state.value),
      value: '',
      numTasks: this.state.numTasks + 1,
    });
  }

  handleDel(event){
    const task = event.target.parentElement.getAttribute("title");
    const newTasks = this.state.tasks;
    const index = newTasks.indexOf(task);
    newTasks.splice(index,1);
    this.setState({
      tasks: newTasks,
    });
    // console.log(event.target.parentElement.firstChild.innerHTML);
  }

  render(){
    return (
      <div>
        <form>
          <label>
            Tasks:
            <input
              type = "text"
              name = "task"
              value = {this.state.value}
              onChange = {this.handleChange}
            />
          </label>
          <button
            type = "button"
            id = "submitTask"
            onClick = {this.handleSubmit}
          >
            Submit Task
          </button>
        </form>
        <Overview
          tasks = {this.state.tasks}
          delete = {this.handleDel}
        />
      </div>
    );
  }
}

export default App;
