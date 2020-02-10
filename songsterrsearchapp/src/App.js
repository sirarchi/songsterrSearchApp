import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox/SearchBox';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <ScoreBoard />
    </div>
  );
}

export default App;
