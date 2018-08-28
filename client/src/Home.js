import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Container/Nav';
import ScrollButton from './Container/scroll';
import { Form, Checkbox} from 'semantic-ui-react';


import { ReactiveBase, CategorySearch, ResultCard, SingleDropdownList } from '@appbaseio/reactivesearch'
import './index.css'

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        filter:'all'
    }
}

changeRadioValue = (value) =>{ 
	this.setState({ filter: value })
}

  OpenDetail =(title) =>{
    window.location.href=`/AlbumPreview/${title}`;
}
  render () {

    const {filter}=this.state
		const dataField=filter=== 'all'? ["title", "artist" ] : filter ;
		const checkboxKey=["all", "title", "artist"];
    
    return (

      <ReactiveBase app='bands' type='_doc' url='https://amp.a-magdy.me'>
        <div className='row'>
          <div className='col'>
          </div>
          <div>
            
            <Nav/>
            <Header />
            <div class='search'>
            <Form style={{ paddingLeft:" 10px",'float':'right', 'marginTop': '20px' }}>
                <Form.Field>
                  {
                    checkboxKey.map((checkbox)=>
                      <Checkbox
                        key={checkboxKey.indexOf(checkbox)}
                        radio
                        style={{padding: '0 5px'}}
                        label={checkbox}
                        name='checkboxRadioGroup'
                        value={checkbox}
                        checked={filter === `${checkbox}` }
                        onChange={()=>this.changeRadioValue(checkbox)}
                      />
                    )
                  }
                </Form.Field>
					  </Form>
            <CategorySearch
                componentId='searchbox'
                dataField={dataField}
                categoryField='title.raw'
                placeholder='Search for music'
                style={{ padding: '5px',  'marginTop': '2px','width':'35%', 'float':'right'}}
                innerClass={{ input: 'text-input'}}
                className='CategorySearch' 
            />
      
            <SingleDropdownList
              componentId='MusicSensor'
              dataField='year.raw'
              size={100}
              sortBy='asc'
              defaultSelected='All Years'
              showCount={true}
              placeholder='Search Music'
              selectAllLabel='All Years'
              react={{ and: ['searchbox'] }}
              showFilter={true}
              filterLabel='Year'
              style={{ padding: '5px', borderRadius:"20px", 'marginTop': '2px','marginRight': '5px','width':'30%'}}
              URLParams={false} 
              innerClass={{ input: 'text-input'}}
              className='drop-field'
              />
              
              </div>
          </div>
          <ResultCard
            componentId='result'
            dataField='titles'
            title='Results'
            from={0}
            size={8}
            pagination={true}
            pages={3}
            react={{ and: ['searchbox', 'yearfilter', 'MusicSensor'] }}
            onData={(res) => {
                      console.log(res.year)
                      return {
                        image: 'https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png',
                        title: 'Song Title: ' + res.title,
                        // url: "https://google.com/search?q=" + res.title,
                        description: (
                        <div>
                          <p>
                            {'Description: ' + res.artist + ' ' + '★'.repeat(res.location)}
                          </p>
                          <p>
                            {'Pub Year: ' + res.year}
                          </p>
                          
                         {/* <AlbumPreview
                          meta={res}                            
                      /> */}
                        </div>
                        ),
                    
                        containerProps: {
                          onClick: ()=>this.OpenDetail(res.title),

                        },
                    
                      }
                    }}
            innerClass={{ listItem: 'itemcontainer' }}
            className='ResultCard'
            style={{ 'textAlign': 'center' }} />
        </div>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        <Footer/>
        <style jsx>{``}</style>
      </ReactiveBase>
    )
    
  }
}

export default Home
