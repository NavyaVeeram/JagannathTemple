import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TwoColumnContainer from './components/Container3';
import FixedComponent from './components/fixedComponent';
import BasicExample from './components/navbar2';
import Container4 from './components/Container4';
import Footer from './components/footer/Footer';
import UncontrolledExample from './components/carousel/Carousel';
import SocialIcons from './components/fixedComponent2';

import './index.css';
import Rituals from './components/Rituals';


   const App=()=> {
   
      return (
        <Router>
      <React.Fragment>
                <FixedComponent />
    <BasicExample />
    <UncontrolledExample />
    <TwoColumnContainer />
    <Container4 />
    <Footer />
    <SocialIcons />
    <Routes>
    <Route path="/rituals" element={<Rituals/>} />         
         </Routes>

    </React.Fragment>
    </Router>    
      );
    }
    export default App;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);