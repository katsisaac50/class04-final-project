import React, { Component } from 'react';
import {  CategorySearch,SingleDropdownList } from '@appbaseio/reactivesearch';
import 'semantic-ui-css/semantic.min.css';
import '../index.css'
import Signup from './Signup';



class Nav extends Component {

    render() {
        return (
                
            <div class='topnav'>
            <a class='active' href='/'>Home</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
            {/* <input type="text" placeholder="Search.."/> */}
            <div style={{ display: "flex", flexDirection: "row-reverse"}}>
              </div>
              <div class='signup'>
                <a class='cbtm'>Sign&nbsp;in</a>
                <a class='cbtn' href="Signup">Sign&nbsp;up</a>
              </div>
          </div>
        );
    }
}

export default Nav;
