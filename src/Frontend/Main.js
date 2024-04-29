import React from 'react';
import './Main.css';
import ContactUs from './ContactUs';
import ContactUs2 from './ContactUs2';
import Footer from './Footer';
import Appointment from './Appointment';

const Main = () => {
    return (
      <div>
        <div className='first-part-wrapper'>
        <ContactUs />
        </div>
        <div className='first-part-wrapper'>
        <ContactUs2 />
        </div>
        <Appointment />
        <Footer />
      </div>
    );
  };
  
  export default Main;
