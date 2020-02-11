import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer'

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
        <Title />
        <SearchBox insertTablatureToMainState={this.insertTablatureToMainState} />
        {this.state.tablatureData.length ? 
          (<ScoreBoard tablatureData={this.state.tablatureData} />) : 
          (<ScoreBoard />) 
        }
        <Footer />
      </div>
    );
  }
}

export default App;
