import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

class App extends Component {
  state = {
    tablatureData: [],
  }

  insertTablatureToMainState = (data) => {
    this.setState({
      tablatureData: data
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBox insertTablatureToMainState={this.insertTablatureToMainState} />
        {this.state.tablatureData.length ? 
          (<ScoreBoard tablatureData={this.state.tablatureData} />) : 
          (<ScoreBoard />) 
          <p>Test</p>
        }
      </div>
    );
  }
}

export default App;
