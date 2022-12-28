import * as React from "react";
import "./App.css";
import group3 from "./assets/group3.svg";
import group4 from "./assets/group4.svg";
const App = () => {
  return (
    <div className="homepage-light">
      <div className="idea-1">
        <div className="rectangle-2">
          <span className="kisan-bhartiya">KISAN BHARTIYA</span>
          <span className="home">Home</span>
          <span className="about">About</span>
          <span className="products">Products</span>
          <span className="contact">Contact</span>
          <img className="group-3" src={group3} />
        </div>
        <div className="flex-container">
          <span>Welcome To Kisan Bhartiya</span>
          <img className="group-4" src={group4} />
        </div>
      </div>
    </div>
  );
};
export default App;
