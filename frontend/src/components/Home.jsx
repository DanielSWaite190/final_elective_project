import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <React.Fragment>
      <div class=".bg-primary.bg-gradient">
        <Image src={require("../media/rings.jpeg")} height="100%" width="100%"/>
        <h1 id="mar_one"class="home-h1 marvel">A Marvel</h1>
        <h1 id="mar_two"class="home-h1 marvel">Of</h1>
        <h3 id="mar_three"class="home-h3 marvel">Engineering!</h3>
        <h3 class="home-h3">What makes a Halo special?</h3>
      </div>

      <div id="topics">
        <div class="tCards">
            <Image src={require("../media/Halo_Wars_Sentinel.jpg")} class="imgTopic" alt="Halo Sentinel" height="250px" width="350px"/>
            <h5 class="home-h5">Sentinel Work Force</h5>
            <p class="home-p">A fully automated army dedicated to keeping your Halo at full operation</p>
        </div>

        <div class="tCards">
            <Image src={require("../media/fiering.jpeg")} class="imgTopic" alt="Halo Firing" height="250px" width="350px"/>
            <h5 class="home-h5">The Weapon</h5>
            <p class="home-p">Not Cortana's sister, but a Halo's true purpose</p>
        </div>

        <div class="tCards">
            <Image src={require("../media/structure.jpeg")} class="imgTopic" alt="Inside A Halo" height="250px" width="350px"/>
            <h5 class="home-h5">Built To Last </h5>
            <p class="home-p">We have backup systems for the backup systems, just in case...</p>
        </div>
      </div>

      <div id="bannerD2">
            <div id="forged">
              <h1 class="forged" id="forg_four">Not exactly forged in the heart of a dying star, </h1>
              <h1 class="forged" id="forg_five">but forged from the raw materials of planetoids</h1>
            </div>
            
            <div id="d_learn">
              <Button id="learn" href="/about">Learn How Halo's Are Born</Button>
            </div>
            <Image src={require("../media/halo&ark.png")} class="imgTopic" alt="Halo Sentinel" width="100%"/>
        </div>
    </React.Fragment>
  );
}

export default Home;