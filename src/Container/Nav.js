import React, { Component } from 'react';
import {  CategorySearch,SingleDropdownList } from '@appbaseio/reactivesearch';
import 'semantic-ui-css/semantic.min.css';
import '../index.css'



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
          </div>
        );
    }
}

export default Nav;
