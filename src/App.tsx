import React from "react";

import TopBar from './components/AppBar/TopBar';
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <TopBar />
      </nav>
      <main></main>
    </div>
  );
}

export default App;
