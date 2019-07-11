import React from "react";
import "./styles/App.css";
import Collection from "../src/components/Collection";
import Categories from "../src/components/Categories";
// import Common from "./components/Common";
import OurStore from "./components/OurStore";

function App() {
  return (
    <div className="App">
      <h1> Placeholder Text </h1>
      <Categories />
      <Collection />
      <OurStore />
    </div>
  );
}

export default App;
