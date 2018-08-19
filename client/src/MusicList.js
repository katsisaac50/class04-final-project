import React, { Component } from 'react'
import { List, Icon, Button } from 'semantic-ui-react'

class MusicList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovor: false,
      "counter":6,// this data should from database in future;
      likeMusic: true
    }
  }
  
   addone=()=>{
    if (this.state.likeMusic === true){
      this.setState({
        "counter": this.state.counter+1,
        likeMusic: false
      }) }else {
        this.setState({
          "counter": this.state.counter-1,
          likeMusic: true
        })
      }

    
    
  console.log(this.state.counter)
    
    }
  render () {
    const { music, album, playMusic } = this.props
    //console.log(album)
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
          onClick={() => this.addone()}
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
