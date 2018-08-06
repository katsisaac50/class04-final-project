import React, { Component } from 'react';
import Home from './Home';
import AlbumPreview from './Container/AlbumPreview';
import { Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Signup from './Container/Signup';

class Route1 extends Component {
  render() {
    return (
      
      <div>
        <Route exact path = "/" component ={Home}/>
        <Route  exact path="/AlbumList" component = {AlbumPreview} />
        <Route   path="/AlbumList/:id" component = {AlbumPreview} />
        <Route   path="/Signup" component = {Signup} />

      </div>
    );
  }
}

export default Route1;


