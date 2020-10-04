import React, { Component } from 'react';
import Overview from './components/Overview'

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      inputTask: '',
      tasks: [],
      numTasks: 0,
      editIndex: null,
      editTask: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
  }

  handleSubmit(event){
    const newTasks = this.state.tasks;
    this.setState({
      tasks: newTasks.concat(this.state.inputTask),
      inputTask: '',
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

  startEdit(event){
    const task = event.target.parentElement.getAttribute("title");
    const index = this.state.tasks.indexOf(task);
    this.setState({
      editIndex: index,
      editTask: this.state.tasks[index],
    });
  }

  submitEdit(event){
    const newTasks = this.state.tasks;
    newTasks.splice(this.state.editIndex, 1, this.state.editTask);
    this.setState({
      tasks: newTasks,
      editIndex: null,
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
              name = "inputTask"
              value = {this.state.inputTask}
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
          editIndex = {this.state.editIndex}
          startEdit = {this.startEdit}
          submitEdit = {this.submitEdit}
          onInputChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default App;
