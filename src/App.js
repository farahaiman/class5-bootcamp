import React from 'react';
import './App.css';
import Parent from './Parent';
import StateProwider from './StateProwider';

function App() {
  return (
    <StateProwider.Provider value={10}>
    <div className="App">
        <Parent/>
    </div>
    </StateProwider.Provider>
  );
}

export default App;
