import React from "react";
import Image from 'react-bootstrap/Image';


function About() {
  return (
    <div id="about">
      <h1 id="banner_h1">To create mega structures, we first needed to buld a mega structure</h1>

      <Image src={require("../media/halo&ark.png")} className="imgTopic" alt="Installation 00, the ark" with="100%"/>

      <div id="info">
          <div id="d_one">
              <p className="about-p">
                  Every Halo has a parent 'ark', this is a planet sized factory that is responsible
                  for sourcing the material needed to buld a Halo. It is also responsible for designing,
                  assembling, testing, and deploying each Halo it is tasked with. There are only two arks
                  in our galaxy today.
              </p>
          </div>

          <Image src={require("../media/inside.jpeg")} className="imgTopic" alt="Halo construction" with="400px" height="400px"/>
          
          <div id="d_two">
              <p className="about-p">
                  In order for the facility to collect material to buld Halos, it sends out sentinels
                  to look for mineral rich planetoids. Once a planetoid is found it is sent via slip
                  space to the ark where retriever essentials will proceed to mine it until there
                  is nothing left. In order to build a Halo, a number of planetoids must be sourced 
                  and mined.
              </p>
          </div>
          
          <Image src={require("../media/ark.jpg")} className="imgTopic" alt="Installation 00 (pic 2)" with="500px" height="400px" />

          <div id="d_three">
              <p className="about-p">
                  Any and all the material collected from a planetoid can be broken down and restuctured
                  to any element needed for the constructon of the Halo. Astroids of this size are seen
                  as nothing more than clay for the ark to mold into Halo parts.
              </p>
          </div>

          <Image id="i3" src={require("../media/ship&ark.png")} className="imgTopic" alt="Installation 00 form a ship" with="400px" height="400px"/>        

          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/AuVaaA_-87c?start=420" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      </div>
    </div>
  )}


export default About;