import React, { Component } from 'react';

class Delete extends Component{
    render(){
        return(
            <button
                onClick = {this.props.onClick}
            >
            DELETE
            </button>
        );
    }

}

export default Delete