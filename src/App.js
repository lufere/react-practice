import React, { Component } from 'react';
import Overview from './components/Overview'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      tasks: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    const newTasks = this.state.tasks;
    this.setState({
      tasks: newTasks.concat(this.state.value),
      value: '',
    });
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
        />
      </div>
    );
  }
}

export default App;
