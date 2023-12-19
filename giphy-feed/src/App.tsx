import React from "react";
import "./App.css";
import GifGrid from "./Components/GifGrid";
//import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-material/dist/all.css";
import GiphyFeed from "./Components/GiphyFeed";

function App() {
  return (
    <div className="App">
      <GiphyFeed />
    </div>
  );
}

export default App;
