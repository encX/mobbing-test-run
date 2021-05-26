import React from "react";

import TopBar from "./components/AppBar/TopBar";
import BottomBar from "./components/AppBar/BottomBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <TopBar />
        <BottomBar />
      </nav>
      <main>
        <section className="searchBox"></section>
        <section className="searchResult"></section>
      </main>
    </div>
  );
}

export default App;
