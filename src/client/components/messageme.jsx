import React, { Component } from 'react';

import MessageComponent from './MessageComponent'

class MessageMeComponent extends Component{
    constructor(props){
        super(props)
        console.log("hi");
        this.state = {
            users: [{
                id:1,
                name: 'naveen',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
            {
                id:2,
                name: 'ajit',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
           ]
        }
    }

    render(){
        return(
            <div className="animated slideInLeft" id="square">    
                <div className="animated bounceInUp" id="leftSquare">
                    <div id="row">
                        <div className="col-lg-8">
                        <h1 className="title">Codepen</h1>
                        </div>
                        <i className="down fa fa-chevron-down" aria-hidden="true"></i>
            
                        <i className="bell fa fa-bell-o fa-lg" aria-hidden="true"></i>
                    </div>
                    <div id="row">
                        <div id="circle"></div>
                        <h2 id="subtitle">mmang</h2>
                    </div>
                    <div id="row">
                        <h2 id="channels">CHANNELS<span id="light">(29)</span>
                        <i className="add fa fa-plus-circle fa-inverse" aria-hidden="true"></i>
                        </h2>
                    </div>
                    <div id="highlight-channel"></div>
                    <div id="row">
                        <h2 id="channel"># pens</h2>
                    </div>
                    <div id="row">
                        <h2 id="channel2"><span id="opacity"># </span> <span id="bold">posts</span></h2>
                    </div>
                    <div id="row">
                        <h2 id="channel3"># shop</h2>
                    </div>
                    <div id="row">
                        <span id="highlight">
                            <h2 id="channel4"># codevember</h2></span>
                    </div>
                    <div id="row">
                        <h2 id="messages">DIRECT MESSAGES<span id="light">(12)</span> <i className="add-two fa fa-plus-circle fa-inverse"></i> </h2>
                    </div>
                    <div id="row">
                        <div id="circle2"></div>
                        <h2 id="subtitle2">Jsmith</h2>
                    </div>
                    <div id="row">
                        <div id="circle3"></div>
                        <h2 id="subtitle3">mmang(you)</h2>
                    </div>
                </div>
                <div className="animated bounceInDown" id="header">
                    <h2 id="channel-title">
                            #pens
                    </h2>
                    <div id = "icons">
                        <i className="star fa fa-star-o" aria-hidden="true"></i>
                        <h3 id="line"> | </h3>
                        <i className="user fa fa-user-o" aria-hidden="true"></i>
                        <h3 id="line2"> | </h3>
                        <i className="pin fa fa-thumb-tack" aria-hidden="true"></i>
                    </div>
                    <div id="rightIcons">
                        <i className="phone fa fa-phone fa-lg" aria-hidden="true"></i>
                        <i className="cog fa fa-cog fa-lg" aria-hidden="true"></i>
                        <i className=" details fa fa-list-alt fa-lg" aria-hidden="true"></i>
                        <h3 id="line3"> | </h3>
                        <i className="search-glass fa fa-search" aria-hidden="true"></i>
                        <input className="search" placeholder="Search" type="text" >
                        </input>
                        <i className="at fa fa-at fa-lg" aria-hidden="true"></i>
                        <i className="star-o fa fa-star-o fa-lg" aria-hidden="true"></i>
                        <i className="menu fa fa-ellipsis-v fa-lg" aria-hidden="true"></i>
                    </div>
                    <hr className="bottom-header-line" />
                </div>
                <div id="message-area">
                   {
                     this.state.users.map((user)=>{
                       return <MessageComponent user = {user} / >
                     })
                   }
                </div>
                <div id="bottom">
                    <input className="search-bottom" placeholder="Message #pens" type="text" >
                                </input>
                    <i className="smile fa fa-smile-o" aria-hidden="true"></i>
                    <h3 id="line-bottom"> | </h3>
                    <i className="plus fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default MessageMeComponent

