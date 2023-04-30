import React from "react";
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <React.Fragment>
      <Image src={require("../media/rings.jpeg")} height="100%" width="100%"/>
    </React.Fragment>
  );
}

export default Home;

