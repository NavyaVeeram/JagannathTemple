// AboutUs.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import React from 'react';
import FixedComponent from '../fixedComponent/FixedComponent';
import BasicExample from '../navbar2/Navbar';
import Footer from '../footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <FixedComponent />
      <BasicExample />
      <img src='https://www.jagannathtemplebollaram.com/images/banner-3.jpg' width={'100%'}/>
    <Container fluid className='bg-image'>
<Row className='p-5'> <h1 style={{color:'red'}}>About the Temple</h1>

<p>Shree Jagannath Temple is located at YSR Colony, IDA Bollaram, Hyderabad Near ORR Exit 4. The present temple built in style of Puri temple is the result of years of hard work and financial assistance of many devotees.
 Mahaprabhu Shree Jagannath, Shree Balabhadra, Devi Shubhdra and Sudarshan Chakra are worshipped daily keeping with the tradition and rituals observed at Puri. Various Puja-Parvana associated with the Lords are also observed round the year. Devotees who come to the shreene get Mahaprasad in the temple and can also take home for their friends and relatives.
  The Holy Rath Yatra or Car Festival of Mahaprabhuis celebrated every year amidst much fanfare. People who reside in the city of Hyderabad and the suburbs come in hordes to have darshan of the Lord in Chariot. This sacred place has come to be popularly known as ‘Shree khetra’ or Jagannath Dham of Bollaram. Important information regarding JagannathaDham IDA Bollaram has been furnished below for all devotees.</p>
  <h1 style={{color:'red'}}> Construction of the Temple and its Location</h1>
<p>With generous help of devotees across Hyderabad and other parts of India, a small temple was constructed on 2011. Gradually, the place also developed as a center of Jagannath Culture with many Seminars and Workshops organized in the temple premises. Distinguished literati from Hyderabad and other parts of the country participated in such programs. Over the years a bigger temple was built in Nov 2018 and new idols were installed with eminent pundits from Puri chanting Veda and performing the required rituals and Yagnya.
</p>
<h1 style={{color:'red'}}>ParswaDevatasinTemple premises</h1>
<p>As in ShreeJagannatha Temple Puri, there is ArunaStambha at Singhadwara. As we begin moving from the ArunaStambhaand climb the flight of twenty two stairs, we come across Garuda Stambha in front of the main templeto arrive at the Jaga Mohan Temple, after moving forward we reach Bhoga Mandap then in main temple resplendent with the divine idols of ShreeJagannatha, Shree Balabhadra, Devi Shubhadra and SudarshanChakra. We are yet to construct side temples(parswa Mandir)around the main temple which areShree Ganesha,Mahavir Hanuman,MaaBimala, Ma Lakshmi and Lord Shiva. Apart from these temples we are also planning to buildYagna Mandap, SnanBedi, KoiliBaikuntha and Bata Mangala Temple within the Temple premises. There are other places alss coming like the temple kitchen to cook the Mahaprasad,Anandabazar where Mahaprasadwill be served to the devotees and a shop selling puja materials.
</p>
<h1 style={{color:'red'}}>Important Puja Parvana observed at the Temple</h1>
<p>All the important Puja-Parvana observed at PuriJagannatha Temple are also carried out at ShreeJagannatha Temple IDA Bollaram. The important ones are : Snan Purnima, Ratha Yatra (Gundicha Yatra), Jhulan Yatra, Balabhadra Jayanti( Rakhi Purnima), Shri Krishna Janmashtami, Ganesh Puja and Shrimad BhagavatJayanti in Bhadra, Durga Puja and Lakshmi Puja in Ashwin, BhagawatSaptaha and Rash Purnima in Kartika, Saraswati Puja in Magha and Shivaratri and Dol Purnima in Falguna, Ram Navami, Rukmini Vivaha are observed with great fervor and enthusiasm.
</p>
<h1 style={{color:'red'}}>Special Pujas</h1>
<p>At devotees' request personalized Pujas like Satyanarayan Puja, Rudrabhishek, NaamkaranUtshab, Anna Prasanna, Maha Prasad Nirbandha, Jalabhiseka, SundaraKandPatha, TulasiSeva, hanuman ChalisaPatha, Thread Ceremony and Marriages etc are also organized.</p></Row>

  </Container>

      <Footer />
    </div>
   
  );
};

export default AboutUs;
