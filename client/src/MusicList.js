import React, { Component } from 'react'
import { List, Icon, Button } from 'semantic-ui-react'


const allSongs = "/songs";
const song = "http://localhost:3001/song";
class MusicList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovor: false,
      counter:0,// this data should from database in future;
      likeMusic: true,
      songsData:{}
    }
    
  }

  getData(){
    fetch(allSongs, /* {mode: 'no-cors'} */)
    .then((response) =>{
      return response.json();
    })
    .then((myJson)=>{
      console.log(myJson, 'fresh data!');
      this.setState({songsData: {myJson}})
      
    });
  }

  componentDidMount(){
    this.getData()
  }
  


  handleLikes=(song)=>{
    console.log(song)
    let id_song=song/*.filter(song.title===this.props.album.title).map(song=>song.id_song) */
    console.log('handle likes for ', id_song);
    let method = this.state.likeMusic ? 'PUT' :'DELETE'
  
    fetch(song+'/'+id_song,{method:method})
      .then((response)=>{
        console.log(response.body);
        return response.json();
      })
      .then((myJson)=> {
        this.setState({
          counter: myJson,
          likeMusic: !this.state.likeMusic
        }) 
    })
  }


    
  render () {
    let songz=this.state.songsData.myJson
    console.log(songz);   
    const { music, album, playMusic } = this.props
    //console.log(this.props)

    const { hovor } = this.state
    const backgroundColor = hovor ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'
    return (
      <List.Item style={{width: '100%', marginTop: '10px', padding: '5px', 
      backgroundColor: `${backgroundColor}`}} 
      onMouseEnter={() => this.setState({hovor: true})} 
      onMouseLeave={() => this.setState({hovor: false})}>
        <List.Content>
        <Button
          content='Like'
          icon='heart'
          label={{ as: 'a', basic: true, content: this.state.counter }}
          labelPosition='right'
          onClick={() => this.handleLikes(songz)} // NEEDS song
          style={{float: 'right'}}
        />

        </List.Content>
        {hovor ?
           <Icon name='play circle outline' size='big' onClick={playMusic} />
           :
           <Icon name='music' size='large' />}
        <List.Content>
          <List.Description>
            {album.artists}
          </List.Description>
          <List.Header key={album.tracks.all.indexOf(music)}>
            {music}
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default MusicList
