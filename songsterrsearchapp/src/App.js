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
    console.log('Main state')
  }

  render() {
    return (
      <div className="App">
        <SearchBox insertTablatureToMainState={this.insertTablatureToMainState} />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
