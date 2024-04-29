import React from "react";
import "./Footer.css";
import footer from './Images/logo.png';
import icon from './Images/icon.png';

const Footer = () => {
  return (
    <div className="all mb-0 pb-0 p">
      <div className="ps-5 pe-5 pe-0 mb-0 pb-0">
        <footer className="py-5 mb-0 pb-0">
          <div className="row align-items-center mb-0 pb-0 d-flex">
            <div className="col-md-2 mb-3">
              <ul className="nav flex-column">
                <button className="btn btn-primary mb-2 custom-button">
                  SUBSCRIBE
                  <img src={icon} alt="Icon" className="icon-img" />
                </button>
                <br />
                <p>
                  We acknowledge the Traditional Owners of Country throughout
                  Australia where we work and live and pay our respects to
                  Elders past and present
                </p>
                <img className="nav-item mb-2 align-left" src={footer} alt="" />{" "}
              </ul>
            </div>

            <div className="col-md-10 mb-0" >
              <div className="row justify-content-end">
              <div className="col-md-1 mb-3 px-0 mx-0 pt-3">
                  <h5>WHO WE HELP</h5>
                  <br />
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        Enterprise
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        Hospitals
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        Aged Care
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        Clinical Customers
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        Management
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 unhide">
                        IT & Operations
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="col-md-2 ps-5 mb-3 px-0 mx-0 pt-3">
              <h5>PRODUCTS & SOLUTIONS</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide ">
                    Concentric Care Platform{" "}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Responder
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Reach
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Safety Monitoring
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Concierge
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Insight
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Pinpoint
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Lighthouse
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Vantage
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-1 mb-3 ps-2 pt-3">
              <h5>ABOUT US</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Our Company
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Our Team
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Work at Rauland
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide ">
                    Careers
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-1 mb-3 ps-4 pt-3">
              <h5>RESOURCES</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    News
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Projects
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Case Studies
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-3 ps-5 pt-3">
              <h5>SUPPORT</h5>
              <br />
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 unhide">
                    Services & Support
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" id="hide" className="nav-link p-0 hide">
                    hide
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-1 mb-3 px-0 mx-0 pt-3">
              <h5>CONTACT US</h5><br/>
              <a href="#" className="nav-link p-0 unhide">
                Login
              </a>
      
            </div>
       
             
            

                {/* Add more columns for other sections (PRODUCTS & SOLUTIONS, ABOUT US, etc.) */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <div>
                  <p>1300 142 142</p>
                  <p>
                    contact©️rauland.com.au{" "}
                    <span className="linkedin-text">Linkedin</span>
                  </p>
                </div>

                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="link-body-emphasis custom-link" href="#">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis custom-link" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis custom-link" href="#">
                      ©️2023 Rauland Australia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;