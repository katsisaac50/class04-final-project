/* eslint-disable */
import React, { Component } from 'react';
import './index.css'

class Header extends Component {
  render() {
    return (
      <header>
     <div className="row banner">
         <div className="banner-text">
            <h1 >The African Music Archive</h1>
            <h3>One point destination for all your favorites</h3>
            <hr />
            
         </div>
      </div>
      {/* <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.."/>
</div> */}
   </header>
    );
  }
}

export default Header;
