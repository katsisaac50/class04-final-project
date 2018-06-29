import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


// const url ='http://localhost:3004/data'
class App extends Component {
constructor(props){
  super(props);
  this.state={
    musicData:[] };
}
  componentDidMount(){
  // fetch(url)
  // .then(function(response) {
  //   console.log(response)
  //   // Here you get the data to modify as you please
  //   })
  // .catch(function(error) {
  //   // If there is any error you will catch them here
  // });
  axios.get('http://localhost:3004/data')
      .then(response => {
        console.log(response)
       this.setState({ musicData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    
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
            <input type="text" name="Search..." placeholder="Search..." onChange={this.searchHandler}/>
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



