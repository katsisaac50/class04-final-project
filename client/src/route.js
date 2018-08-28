import React, { Component } from 'react';
import Home from './Home';
import About, {Contact}from './Container/About'
import AlbumPreview from './Container/AlbumPreview';
import { Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

class Route1 extends Component {
  render() {
    return (
      
      <div>
        <Route exact path = "/" component ={Home}/>
        <Route exact path = "/About" component ={About}/>
        <Route exact path = "/Contact" component ={Contact}/>
        {/* <Route  exact path="/AlbumList" component = {AlbumPreview} /> */}
        <Route   path="/AlbumPreview/:id" component = {AlbumPreview} />
{/*         <Route   path="/Signup" component = {Signup} />
 */}
      </div>
    );
  }
}

export default Route1;


