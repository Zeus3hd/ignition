import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <Cards />
      <CreatePost />
    </div>
  );
}

export default App;
