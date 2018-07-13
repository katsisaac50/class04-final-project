import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ReactiveBase, CategorySearch, RangeSlider, ResultCard, SingleDropdownList, SelectedFilters } from '@appbaseio/reactivesearch'

import './index.css'

class App extends Component {
  render () {
    return (
      <ReactiveBase app='bands' type='_doc' url='https://amp.a-magdy.me'>
        <div className='row'>
          <div className='col'>
          </div>
          <div>
            <SelectedFilters />
            <CategorySearch
              componentId='searchbox'
              dataField={['titles', 'artists']}
              categoryField='titles.raw'
              placeholder='Search for music'
              style={{ padding: '5px', 'marginTop': '100px' }}
              innerClass={{ input: 'text-input' }}
              className='CategorySearch' />
            <SingleDropdownList
              componentId='MusicSensor'
              dataField='publishedYear.raw'
              title='PubYear'
              size={100}
              sortBy='asc'
              defaultSelected='1950'
              showCount={true}
              placeholder='Search Music'
              selectAllLabel='All Years'
              react={{ and: ['CategoryFilter', 'SearchFilter'] }}
              showFilter={true}
              filterLabel='Year'
              URLParams={false} />
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
                      console.log(res.publishedYear)
                      return {
                        image: 'https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png',
                        title: 'Song Title: ' + res.titles,
                        description: (
                        <div>
                          <p>
                            {'Description: ' + res.artists + ' ' + '★'.repeat(res.location)}
                          </p>
                          <p>
                            {'Pub Year: ' + res.publishedYear}
                          </p>
                          <div className='player-wrapper'>
                            <label for='t-rex-roar'>
                              <strong>Preview</strong>
                            </label>
                            <br/>
                            <audio controls src='http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3'>
                              Your browser does not support the <code>audio</code> element.
                            </audio>
                          </div>
                        </div>
                    
                        ),
                    
                        containerProps: {
                          onMouseEnter: () => console.log('😁'),
                          onMouseLeave: () => console.log('🙀')
                        }
                    
                    
                      }
                    }}
            innerClass={{ listItem: 'itemcontainer' }}
            className='ResultCard'
            style={{ 'textAlign': 'center' }} />
        </div>
      </ReactiveBase>
    )
  }
}

export default App
