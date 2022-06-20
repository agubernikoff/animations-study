import "./App.css";
import { Routes, Route } from "react-router-dom";
import List from "./List.js";
import Mario from "./Mario.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route exact path="/mario" element={<Mario />} />
      </Routes>
    </div>
  );
}

export default App;
