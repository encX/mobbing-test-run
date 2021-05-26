import React from "react";

import TopBar from "./components/AppBar/TopBar";
import BottomBar from "./components/AppBar/BottomBar";
import SearchBox from './components/SearchBox/SearchBox';
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <TopBar />
        <BottomBar />
      </nav>
      <main>
      <SearchBox />
      <section className="searchResult"></section>
      </main>
    </div>
  );
}

export default App;
