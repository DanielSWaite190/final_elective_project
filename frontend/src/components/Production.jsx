import React from "react";
import List from "./List";

function Production(props) {
  return (
    <React.Fragment>
      <h1 className="production-h1">Choose your new Halo</h1>
      <h3 className="production-h3">Orders made in May, will be available starting in October.</h3>

      <div id="options">
        <div id="hcards">
            <img id="pic" src={require("../media/blue.jpg")} alt="10,000km Halo"></img>
            <p className="production-p">10,000 kilometer</p>
        </div>

        <div id="hcards">
            <img id="pic" src={require("../media/planet.webp")} alt="30,000km Halo"></img>
            <p className="production-p">30,000 kilometer</p>
        </div>
      </div>
      <div id="list"><List/></div>
    </React.Fragment>
  );
}

export default Production;

