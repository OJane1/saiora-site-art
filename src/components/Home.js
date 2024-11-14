// Home.js
import React from "react";
import HeaderAnimation from "./HeaderAnimation"; 
// import { Example } from "./Example";
import Stack from 'react-bootstrap/Stack';
import ControlledCarousel from "./Carousel";
import './Home.css';


const Home = () => {
  return (
   <Stack gap={6}>
        <div>    
      <HeaderAnimation /> 
      </div>
      <div>
        <ControlledCarousel />
      </div>
      {/* <div>
      <Example />
      </div> */}
      </Stack>
  );
};

export default Home;
