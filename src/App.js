import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FixedComponent from './components/fixedComponent/FixedComponent';
import BasicExample from './components/navbar2/Navbar';
import SocialIcons from './components/fixedComponent2/FixedComponent2';
import UncontrolledExample from './components/carousel/Carousel';
import TwoColumnContainer from './components/Container3/Container';
import Container4 from './components/Container4/Container4';
import './index.css';
import Rituals from './components/Rituals/Rituals';
import Footer from './components/footer/Footer';
import AboutUs from './components/Aboutus/About';
import Culture from './components/culture/Culture';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FixedComponent />
              <BasicExample />
              <UncontrolledExample />
              <TwoColumnContainer />
              <Container4 />
              <SocialIcons />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rituals" element={<Rituals />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/festivals" element={<Culture />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
