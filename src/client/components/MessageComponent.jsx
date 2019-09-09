import React, { Component } from 'react';

class MessageComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var user = this.props.user
        return(
            user.id ? <div id={"message"+user.id}>
        <div id="container">
          <div className="row">
            <div className="col-xs-6 col-md-3">
    <a href="#" className="person-one thumbnail">
      <img className="person-img-one" src={user.src} />
    </a>
            </div>
          </div>
        </div>
        <div id="container"> 
          <h4 id="person-name"> {user.name} <span id="time">9:02 AM</span> </h4>
          <h5 id="person-text">
             {user.message}
          </h5>
        </div>
       </div>:null)
    }
}

export default MessageComponent

