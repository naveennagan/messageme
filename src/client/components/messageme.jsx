import React, { Component } from 'react';

class MessageMeComponent extends Component{
    constructor(props){
        super(props)
        console.log("hi");
        this.state = {
            name: 'MessageMe'
          }
    }

    render(){
        return(
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default MessageMeComponent

