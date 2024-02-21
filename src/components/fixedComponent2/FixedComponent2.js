import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './fixed.css'
const SocialIcons = () => {
  return (
    <div className='align-items-center  text-light justify-content-center fixeds'>
     <div><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook">
        <FontAwesomeIcon icon={faFacebook} className="pe-3" />
      </a></div>
     <div> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} className="pe-3" />
      </a></div>
      <div><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter">
        <FontAwesomeIcon icon={faTwitter} className="pe-3" />
      </a></div>
     <div><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} className="pe-3" />
      </a></div>
    </div>
  );
};

export default SocialIcons;
