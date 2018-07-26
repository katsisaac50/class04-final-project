import React, { Component } from 'react'
import { List, Icon, Button } from 'semantic-ui-react'

class MusicList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hovor: false
    }
  }
  render () {
    const { music, album, playMusic } = this.props
    console.log(album)
    const { hovor } = this.state
    const backgroundColor = hovor ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'
    return (
      <List.Item style={{width: '100%', marginTop: '10px', padding: '5px', 
      backgroundColor: `${backgroundColor}`}} 
      onMouseEnter={() => this.setState({hovor: true})} 
      onMouseLeave={() => this.setState({hovor: false})}>
        <List.Content>
         {/* <Button
            basic
            circular
            color='red'
            style={{float: 'right'}}
            icon='heart' />
           <Button
            basic
            circular
            color='blue'
            style={{float: 'right'}}
            icon='cloud download' /> */}
<div class="ui labeled button" tabindex="0" style={{float: 'right'}}>
  <div class="ui button">
    <i class="heart icon"></i> Like
  </div>
  <a class="ui basic label">
    2,048
  </a>
</div>

        </List.Content>
        {hovor ?
           <Icon name='play circle outline' size='big' onClick={playMusic} />
           :
           <Icon name='music' size='large' />}
        <List.Content>
          <List.Description>
            {album.artists}
          </List.Description>
          <List.Header key={album.titles.indexOf(music)}>
            {music}
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default MusicList
