import React, { Component } from 'react'
import { List, Icon, Button, Segment} from 'semantic-ui-react';



class ScrollButton extends Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <div>
        <Button
      content='To the top'
      icon='chevron circle up'
      labelPosition='right'
      onClick={ () => { this.scrollToTop(); }}
      style={{float: 'right',width:'13%'}}
      circular
      className='scroll'
    />
        {/* <button title='Back to top' className='scroll' 
                       onClick={() => this.addone()}>
                  <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                </button> */}
                </div>;
     }
  } 

  export default ScrollButton;