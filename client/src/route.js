import React, { Component } from 'react';
import App from './App';
import AlbumPreview from './Container/AlbumPreview';
import { Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

class Route1 extends Component {
  render() {
    return (
      
      <div>
        <Route exact path = "/" component ={App}/>
        <Route  exact path="/AlbumList" component = {AlbumPreview} />
        <Route   path="/AlbumList/:id" component = {AlbumPreview} />
      </div>
    );
  }
}

export default Route1;