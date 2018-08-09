import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Container/Nav';
import ScrollButton from './Container/scroll';



import { ReactiveBase, CategorySearch, RangeSlider, ResultCard, SingleDropdownList, SelectedFilters } from '@appbaseio/reactivesearch'
import './index.css'

class Home extends Component {

  OpenDetail =(title) =>{
    window.location.href=`/AlbumPreview/${title}`;
}
  render () {
    
    return (

      <ReactiveBase app='bands' type='_doc' url='https://amp.a-magdy.me'>
        <div className='row'>
          <div className='col'>
          </div>
          <div>
            
            <Nav/>
            <Header />
            <div class='search'>
            
            <CategorySearch
                componentId='searchbox'
                dataField={['title', 'artist','tracks','label','physical']}
                categoryField='title.raw'
                placeholder='Search for music'
                style={{ padding: '5px',  'marginTop': '2px','width':'35%', 'float':'right'}}
                innerClass={{ input: 'text-input'}}
                className='CategorySearch' />
      
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
              style={{ padding: '5px', 'marginTop': '2px','marginRight': '5px','width':'50%','borderRadius': '80px'}}
              URLParams={false} 
              innerClass={{ icon: 'text-input'}}
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
                          // onMouseEnter: () => {
                          //   var x = document.getElementById('myDIV')
                          //   x.innerHTML = 'Details'
                          // },
                          // onMouseLeave: (event) => {
                          //   var x = document.getElementById('myDIV')
                          //   x.innerHTML = ''}
                        },
                    
                      }
                    }}
            innerClass={{ listItem: 'itemcontainer' }}
            className='ResultCard'
            style={{ 'textAlign': 'center' }} />
        </div>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        <Footer/>
      </ReactiveBase>
    )
    
  }
}

export default Home
