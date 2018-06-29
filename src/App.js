import React, { Component } from 'react';
import './App.css';


const url ="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/database-24fdbd.json"
class App extends Component {


  getInfo = () => {
  fetch(url)
  .then(function(data) {
    console.log(data)
    // Here you get the data to modify as you please
    })
  .catch(function(error) {
    // If there is any error you will catch them here
  });
}


  render() {
    return (
      <div >
        <div>
        <Search />
         <AlbumSuggestions />
        {/*<ScrollPage /> */}
     </div>
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
            <form name="searchform" onSubmit={this.handleSubmit}>
<label>
  Search here 
            <input type="text" name="Search..." placeholder="Search..."/>
            <input type="submit" name="SearchSubmit" value="Search"/>
   </label>   

            <input name="sengines" type="radio"  onChange={this.handleChange} /> All
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Title
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Artist
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Year
         
          
            </form>
    )
  }
}

export default App;


class AlbumSuggestions extends React.Component {
//   constructor(){
// super();
// state = {
//   query: '',
//   results: []
// }
//   }  
  





handleleftChange = () => {
  this.setState({
    query: this.search.value
  }, () => {
    if (this.state.query && this.state.query.length > 1) {
      if (this.state.query.length % 2 === 0) {
        this.getInfo()
      }
    } 
  })
}

  render(){
    return(
      <div className="thumbnail-container">
   <ul className="thumbnail-list">
     <li><img className="thumbnail-image" src="http://placehold.it/300x300" alt=""/>
     <span></span></li>
    </ul>
    <button className="w3-button w3-display-left" onClick={this.handleleftChange}>&#10094;</button>
    <button className="w3-button w3-display-right" onClick={this.handlerightChange}>&#10095;</button>
    </div>
    )
  }
}