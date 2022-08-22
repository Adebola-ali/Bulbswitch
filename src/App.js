import React, { useState } from "react";
import "./App.css";
import image1 from "./Components/Images/offbulb.jpg";
import image2 from "./Components/Images/onbulb.webp";

export const App = () => {
  const [Bulb, setBulb] = useState(false);

  return (
    <div className="App">
      <img src={Bulb ?image2 : image1} alt="bulb-off" />
      <div className="bulb">
        <button onClick={() => setBulb(Bulb === false ? true : true)}>
          Switch On
        </button>
        <button id="buttonOff"  onClick={() => setBulb(Bulb === true ? false : false)}>
          Switch Off
        </button>
      </div>
    </div>
  );
};
