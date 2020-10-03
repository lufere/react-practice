import React, { Component } from 'react';


class Overview extends Component{
    render(){
    const taskList = this.props.tasks.map((task)=>
        <li key = {task}>{task}</li>
    );
        return(
            <ul>
                {taskList}
            </ul>
        );
    }

}

export default Overview