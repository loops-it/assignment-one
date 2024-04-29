import React from 'react';
import './ContactUs.css'; // Import your CSS file
import logoBlack from './Images/logoBlack.png';
import search from './Images/search.png';
import arrowBlack from './Images/arrowBlack.png';
import arrow from './Images/arrow.png';

const ContactUs = () => {
  return (
      <div className="body2">
        <nav className="navbar">
          <div className="logo">
            <img src={logoBlack} alt="Logo" />
          </div>
              <button style = {{marginLeft: '450px'}}className="dropbtn">Who We Help</button>
              <button className="dropbtn">Products</button>
              <button className="nav-item">Support</button>
              <button className="dropbtn">Resources</button>
              <button className="dropbtn">Our Company</button>
          {/* Buttons */}
          <button className="nav-button">Contact Us</button>
          <button className="nav-button2">Login</button>
          {/* Search Icon */}
          <img src={search} style={{ width: '20px', height: '20px', marginLeft: '15px' }} alt="Search" />
        </nav>
        <div className='topic'>
          <p>Contact Us</p>
        </div>
        <div className='content'>
          <p>Our team is dedicated to providing the best support for our customers.</p>
        </div>
        <div className='content2'>
          <p>Submit any questions about our products and services below.</p>
        </div>
        <div className='topic2'>
          <p>FOR ANY INQUIRIES</p>
        </div>
        <div className='topic2'>
          <p>FOR SERVICE SUPPORT</p>
        </div>
        <div className='topic2'>
          <p>TO ORDER PARTS</p>
        </div>
        <div className="ellipse-container">
          <div className="ellipse1">
            <img src={arrow} alt="arrow" />
            <p>General</p>
            <p>enquiry</p>
          </div>
        </div>
        <div className="ellipse-container2">
          <div className="ellipse2">
            <img src={arrowBlack} alt="arrow" />
            <p>Log a Service</p>
            <p style={{marginLeft: '-40px'}}>Request</p>
          </div>
        </div>
        <div className="ellipse-container3">
          <div className="ellipse3">
            <img src={arrowBlack} alt="arrow" />
            <p>Order Additional</p>
            <p style={{marginLeft: '-90px'}}>Parts</p>
          </div>
        </div>
        <div className='contact'>
          <p>Contact</p>
        </div>
        <div className='contactNum'>
          <p style={{ marginLeft: '1250px', marginTop: '-10px', color: '#404040' }}>1300 142 142</p>
          <p style={{ marginLeft: '1250px', marginTop: '-10px', color: '#404040' }}>contact@rauland.com.au</p>
        </div>
        <div style={{ marginLeft: '1250px', marginTop: '50px', fontWeight: '500' }}>
          <p>Business Hours</p>
        </div>
        <div className='contactNum'>
          <p style={{ marginLeft: '1250px', marginTop: '-10px', color: '#404040' }}>8 am - 5 pm</p>
          <p style={{ marginLeft: '1250px', marginTop: '-10px', color: '#404040' }}>Mon - Fri</p>
          <p style={{ marginLeft: '1250px', marginTop: '-10px', color: '#404040' }}>Except Public Holidays</p>
        </div>
      </div>
  );
}

export default ContactUs;
