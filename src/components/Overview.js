import React, { Component } from 'react';
import Delete from './Delete'
import Edit from './Edit'
import SubmitEdit from './SubmitEdit'

class Overview extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onInputChange(event);
    }

    render(){
    const taskList = this.props.tasks.map((task,i)=>{
        if(this.props.editIndex === i){
            return(
                <li key = {task} title = {task}>
                    <input
                        defaultValue = {task} 
                        name = "editTask"
                        onChange = {this.handleChange}
                    >    
                    </input>
                    <SubmitEdit
                        onClick = {this.props.submitEdit}
                    />
                </li>
            );
        }else{
            return(
                <li key = {task} title = {task}>
                    <p>{i + ".- " + task}</p>
                    <Delete
                        onClick = {this.props.delete}
                    />
                    <Edit
                        onClick = {this.props.startEdit}
                    />
                </li>
            );
        }
    }
    );
        return(
            <ul>
                {taskList}
            </ul>
        );
    }

}

export default Overview