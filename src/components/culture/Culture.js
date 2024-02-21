// AboutUs.js

import React from 'react';
import BasicExample from '../navbar2/Navbar';
import FixedComponent from '../fixedComponent/FixedComponent';
const Culture = () => {
  return (
    <div>
      <FixedComponent/>
      <BasicExample />
      <h2>Culture</h2>
      <p>Welcome to our company's about us page! We are dedicated to...</p>
     
    </div>
  );
};

export default Culture;
