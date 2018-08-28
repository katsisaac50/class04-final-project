import React, { Component } from 'react';
import {Icon, Segment} from 'semantic-ui-react';


class MusicPlay extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        const { closePlayer } = this.props;
      return (
        
            <Segment textAlign='center'>
                <div style={{float: 'right'}}>
                    <Icon name='close' onClick={closePlayer} />
                </div>
                <audio className='player-wrapper' controls src='http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3' style={{width: '50%'}} >
                    <source src="horse.ogg" type="audio/ogg"/>
                    <source src="horse.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </Segment>
        
      );
    }
  }
  
  export default MusicPlay;