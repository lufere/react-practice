import React, { Component } from 'react';

class Edit extends Component{
    render(){
        return(
            <button
                onClick = {this.props.onClick}
            >
            SUBMIT
            </button>
        );
    }

}

export default Edit