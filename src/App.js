import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
        <ReactiveBase
        app="bands"
        type="_doc"
        url="https://amp.a-magdy.me">
          <div>
            <div >
              <CategorySearch
                componentId="searchbox"
                dataField={["titles", "artists"]}
                categoryField="titles.raw"
                placeholder="Search for music"
                style={{
                  padding: "5px",
                  "marginTop": "100px"
                }}
                innerClass={{
                  input: 'text-input'
              }}
              className="CategorySearch"
              />
              <RangeSlider
                componentId="yearfilter"
                dataField="publishedYear"
                title="Year"
                filterLabel="Year"
                showHistogram={true}
                range={{
                  start: 1945,
                  end: 2018
                }}
                rangeLabels={{
                  start: "1945",
                  end: "2018"
                }}
                interval={1}
                react={{
                  and: ["searchbox"]
                }}
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />
            </div>
            <ResultCard
              componentId="result"
              dataField="titles"
              title="Results"
              from={0}
              size={6}
              pagination={true}
              pages={3}
              react={{
                and: ["searchbox", "yearfilter"]
              }}
              onData={(res) => {
                console.log(res.publishedYear);
                return {
                  image: "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",
                  title: 'Song Title: '+res.titles,
                  description: (
                    <div>
                      <p>
                        {'Description: '+res.artists + " " + "★".repeat(res.location)}
                      </p>
                        <p>{'Pub Year: '+res.publishedYear}</p>
                    </div>
                ),
                  
                containerProps: {
                  onMouseEnter: () => console.log('😁'),
                  onMouseLeave: () => console.log('🙀')
                } 
                  

                }
              }}
              style={{
                "textAlign": "center"
              }}
            />
          </div>
        </ReactiveBase>
    );
  }
}

export default App;
