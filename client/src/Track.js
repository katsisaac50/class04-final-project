import React, { Component } from 'react'
import { List, Icon, Button } from 'semantic-ui-react'
import ScrollButton from './Container/scroll';


const allSongs = "/songs";

class Track extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovor: false,
      
      likeMusic: true,
      songsData:{}
    }
   
  }

  render () {
    //let songz=this.state.songsData.albumData
    //console.log(songz);   
    const { track, album, playMusic } = this.props    // destruct music,album, playMusic from props
  console.log(album)
    // destruct music,album, playMusic from props

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
          label={{ as: 'a', basic: true, content: 2 }}
          labelPosition='right'
         // onClick={() => this.handleLikes(songz)} // NEEDS song
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
          <List.Header key={album.tracks.all.indexOf(track)}>
            {track}
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default Track
