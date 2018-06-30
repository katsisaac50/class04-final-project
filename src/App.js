import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


// const url ='http://localhost:3004/data'
class App extends Component {
constructor(props){
  super(props);
  this.state={
    musicData:[],
  term:'',
 };
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
        console.log(response.data)
       this.setState({ musicData: response.data });
       
      })
      .catch(function (error) {
        console.log(error);
      })
    
}


  render() {    
    const{musicData}=this.state;

    return (musicData.length > 0 &&
      <div >
              {console.log(musicData)}

        <div>
        <Search data={this.state.musicData}/>
         <AlbumSuggestions />
        {/*<ScrollPage /> */}
     </div>
      </div>
    );
  }
}

function searchingFor(term){
  return function(x){
    console.log(x)
    return x.titles.toLowerCase().includes(term.toLowerCase())||!term;
  }
}
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      musicData:this.props.data,
    term:'',
   };
   this.searchHandler=this.searchHandler.bind(this)

  }

  searchHandler(e){
    this.setState({term:e.target.value})
  
  }

  render() {
    
    const{musicData,term}=this.state;
    console.log(term)
    searchingFor(term)
    return (
    <div>
            <form name="searchform" onSubmit={this.handleSubmit}>
<label>
  Search here 
            <input type="text" name="Search..." placeholder="Search..." onChange={this.searchHandler} value={term}/>
   </label>   

            <input name="sengines" type="radio"  onChange={this.handleChange} /> All
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Title
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Artist
            <input name="sengines" type="radio"  onChange={this.handleChange} /> Year
         
          
            </form>
            {
musicData.filter(searchingFor(term)).map(musicInfo=>
<div>
  <h1>{musicInfo.titles}</h1>
</div>)
            }
            </div>
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



