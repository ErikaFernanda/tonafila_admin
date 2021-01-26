import React, { Component } from 'react';
import './navbar.css';
import { BsFillChatDotsFill } from "react-icons/bs"


export class Navbar extends Component {
  render() {
    return (
      
      <div className="nav">
        <div className="btn-menu"> </div>
        <div className="btn-chat"><BsFillChatDotsFill id="btn-chat-icon"/></div>
      </div>
    );
  }
}




export default Navbar;

