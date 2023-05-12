import React from "react";
import List from "./List";

function Production() {
  return (
    <React.Fragment>
      <h1 class="production-h1">Choose your new Halo</h1>
      <h3 class="production-h3">Orders made in May, will be available starting in October.</h3>

      <div id="options">
        <div id="hcards">
            <a href=""><img id="pic" src={require("../media/blue.jpg")} alt="10,000km Halo"></img></a>
            <p class="production-p">10,000 kilometer</p>
        </div>

        <div id="hcards">
            <a href=""><img id="pic" src={require("../media/planet.webp")} alt="30,000km Halo"></img></a>
            <p class="production-p">30,000 kilometer</p>
        </div>
      </div>
      <List/>
    </React.Fragment>
  );
}

export default Production;

