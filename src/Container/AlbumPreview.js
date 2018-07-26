import React, { Component } from 'react';
import AppHeader from '../Header';
import AppFooter from '../Footer';
import MusicList from '../MusicList';
import MusicPlay from '../MusicPlay';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Grid, Header, Container, Image, Label, List } from 'semantic-ui-react';

class AlbumPreview extends Component {

    constructor(props){
        super(props);
        this.state={
            album:{},
            playMusic: false
        }
    }
    componentWillMount(){
        const id= this.props.match.params.id;
        console.log(id);
        axios.get('https://raw.githubusercontent.com/HackYourFuture-CPH/class04-final-project/master/database-24fdbd.json')
            .then((res) => {
                const albums = res.data;
               // console.log(res.data)
                const album = albums.filter((album)=>album.id===id)[0]
                this.setState({ album:album })
            }).catch(function (error) {
                console.log(error);
            })     
    }
    
    playMusic= () => {
        this.setState({playMusic: true})
    }
    render() {
        const { album } = this.state;
        console.log(album )
        if(!album)
        {
            return null;
          }
        
        return (
            <div>
                <Grid style={{backgroundColor: 'rgba(0,0,0, 0.8)'}}>
                    <Grid.Row>
                        <Grid.Column computer={16} tablet={16} mobile={16}>
                            <AppHeader/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                <Grid>
                     
                        <Grid.Column computer={2} tablet={2} mobile={1} style={{backgroundColor: 'rgba(0,0,0, 0.1)'}}>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={5} mobile={16} style={{}}>
                            <Container>
                                <Header as="h3"> {album.artists} </Header>
                                <Image src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"/>
                                
                                <div className='player-wrapper'>
                            <label for='t-rex-roar'>
                              <strong id='myDIV'></strong>
                            </label>
                            <br/>
                            <audio className='player-wrapper' controls src='http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3'>
                              Your browser does not support the <code>audio</code> element.
                            </audio>
                          </div>

                                <div style={{borderBottom: "solid grey 1px", padding: "10px 0"}}>
                                    <List divided style={{borderBottom: "solid grey 1px" }}>
                                        <List.Item style={{padding: "10px 0"}}>
                                            {'location: '+ album.location}
                                        </List.Item>
                                            
                                        <List.Item style={{padding: "10px 0"}}>
                                            {'Publish: '+ album.publishedYear}
                                        </List.Item>
                                    </List>
                                   { album.keywords && album.keywords.map(keyword =><Label 
                                                                                        key={album.keywords.indexOf(keyword)}
                                                                                        style={{margin:"5px"}}
                                                                                    >
                                                                                        {keyword}
                                                                                    </Label> 
                                                                        )} 
                                </div>
                            </Container>
                        </Grid.Column>
                        <Grid.Column computer={7} tablet={7} mobile={16} style={{}}>
                            <Container style={{paddingTop: '50px'}}>
                                <Header as="h3">Music</Header>
                                <List fluid  verticalAlign='middle'  size="big"  >
                                    {
                                        album.titles && album.titles.map(music=>{
                                            const id=album.titles.indexOf(music);
                                            return(
                                                <MusicList 
                                                    key={id} 
                                                    music={music} 
                                                    album={album}
                                                    playMusic={this.playMusic}
                                                /> 
                                            ) 
                                        }
                                            
                                    )}
                                </List>
                            </Container>                                      
                        </Grid.Column>
                        <Grid.Column 
                            computer={2} tablet={2} mobile={0} 
                            style={{backgroundColor: 'rgba(0,0,0, 0.1)'}}
                        >
                        </Grid.Column>
                </Grid>
                
                {this.state.playMusic && 
                    <MusicPlay
                        closePlayer={()=>this.setState({playMusic: false})}
                    />
                }
                <AppFooter/> 

            </div>

        );
    }
}

export default withRouter(AlbumPreview);
