import React from "react";
import "./Production.css"


function Production() {
  return (
    <React.Fragment>
      <h1>Choose your new Halo</h1>
      <h3>Orders made in June, will be available starting in September.</h3>

      <div id="options">
        <div id="hcards">
            <a href=""><img id="pic" src={require("../../media/blue.jpg")} alt="10,000km Halo"></img></a>
            <p>10,000 kilometer</p>
        </div>

        <div id="hcards">
            <a href=""><img id="pic" src={require("../../media/planet.webp")} alt="30,000km Halo"></img></a>
            <p>30,000 kilometer</p>
        </div>
      </div>
      

    </React.Fragment>
  );
}

export default Production;

