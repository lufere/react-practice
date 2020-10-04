import React, { Component } from 'react';
import Delete from './Delete'


class Overview extends Component{
    render(){
    const taskList = this.props.tasks.map((task,i)=>
        <li key = {task} title = {task}>
            <p>{i + ".- " + task}</p>
            <Delete
                onClick = {this.props.delete}
            />
        </li>
    );
        return(
            <ul>
                {taskList}
            </ul>
        );
    }

}

export default Overview