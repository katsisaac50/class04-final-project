import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../index.css'



class Nav extends Component {

    render() {
        return (
                
            <div class='topnav'>
            <a class='active' href='/'>Home</a>
            <a href='/About'>About</a>
            <a href='/contact'>Contact</a>
            {/* <input type="text" placeholder="Search.."/> */}
            <div style={{ display: "flex", flexDirection: "row-reverse"}}>
              </div>
              
          </div>
        );
    }
}

export default Nav;
