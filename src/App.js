import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`https://robohash.org/${Date.now()}`} className="App-logo" alt="logo" />
        <p>
          Hello, from your robot friends!
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
        >
          Random Wikipedia Article
        </a>
      </header>
    </div>
  );
}

export default App;
