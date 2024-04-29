import React from 'react';
import './ContactUs2.css';
import sydney from './Images/sydney.png';
import melbourne from './Images/melbourne.png';
import brisbane from './Images/brisbane.png';
import auckland from './Images/auckland.png';
import adelaid from './Images/adelaid.png';
import perth from './Images/perth.png';
import phone from './Images/phone.png';
import address from './Images/address.png';

const ContactUs2 = () => {
    return (
        <div className="body">
            <div className='Topic'>
                <p>Where to Find Us</p>
            </div>
            <div className='Topic2'>
                <p>Discover your local Rauland office across Australia and New Zealand</p>
            </div>
            <div className='rectangle'>
                <img src={sydney} alt="Sydney" />
                <img src={melbourne} alt="Melbourne" />
                <img src={brisbane} alt="Brisbane" />
                <img src={perth} alt="Perth" />
                <img src={adelaid} alt="Adelaid" />
                <img src={auckland} alt="Auckland" />
                <div className='topic8'>
                    <p style={{ marginLeft: '-88px' }}>Sydney - NSW</p>
                    <p style={{ paddingLeft: '100px' }}>Melbourne - VIC</p>
                    <p style={{ paddingLeft: '80px' }}>Brisbane - QLD</p>
                    <p style={{ paddingLeft: '100px' }}>Perth - WA</p>
                    <p style={{ paddingLeft: '130px' }}>Adelaide - SA</p>
                    <p style={{ paddingLeft: '100px' }}>Auckland - NZ</p>
                </div>
                <div className='phone'>
                    <img style={{ marginLeft: '-58px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+61 2 9908 1777</p>
                    <img style={{ marginLeft: '105px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+61 3 9328 5811</p>
                    <img style={{ marginLeft: '105px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+61 7 3846 0155</p>
                    <img style={{ marginLeft: '105px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+61 8 6282 2000</p>
                    <img style={{ marginLeft: '95px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+1300 142 142</p>
                    <img style={{ marginLeft: '120px' }} src={phone} alt="Phone" />
                    <p style={{ marginLeft: '13px', marginTop: '47px' }}>+64 9 308 6555</p>
                </div>
                <div className='address'>
                    <img style={{ marginLeft: '-53px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '-28px', marginTop: '-15px', display: 'block' }}>514 Miller Street, </p>
                    <p style={{ marginLeft: '-28px', marginTop: '-10px', display: 'block' }}>Cammeray NSW,</p>
                    <p style={{ marginLeft: '-28px', marginTop: '-10px', display: 'block' }}>2062 Australia</p>
                    <img style={{ marginLeft: '160px', marginTop: '-100px', marginBottom: '65px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '185px', marginTop: '-100px', display: 'block' }}>40 Straker Street,</p>
                    <p style={{ marginLeft: '185px', marginTop: '-10px', display: 'block' }}>North Melbourne,</p>
                    <p style={{ marginLeft: '185px', marginTop: '-10px', display: 'block' }}>VIC 3051 Australia</p>
                    <img style={{ marginLeft: '375px', marginTop: '-100px', marginBottom: '65px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '400px', marginTop: '-100px', display: 'block' }}>249 Boundary</p>
                    <p style={{ marginLeft: '400px', marginTop: '-10px', display: 'block' }}>Street, West End,</p>
                    <p style={{ marginLeft: '400px', marginTop: '-10px', display: 'block' }}>QLD 4101 Australia</p>
                    <img style={{ marginLeft: '590px', marginTop: '-90px', marginBottom: '65px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '617px', marginTop: '-95px', display: 'block' }}>301 Onslow Road,</p>
                    <p style={{ marginLeft: '617px', marginTop: '-10px', display: 'block' }}>Shenton Park WA,</p>
                    <p style={{ marginLeft: '617px', marginTop: '-10px', display: 'block' }}>6008 Australia</p>
                    <img style={{ marginLeft: '800px', marginTop: '-100px', marginBottom: '65px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '830px', marginTop: '-100px', display: 'block' }}>240 Port Road,</p>
                    <p style={{ marginLeft: '830px', marginTop: '-10px', display: 'block' }}>Hindmarsh SA 5007,</p>
                    <p style={{ marginLeft: '830px', marginTop: '-10px', display: 'block' }}>Australia</p>
                    <img style={{ marginLeft: '1017px', marginTop: '-100px', marginBottom: '65px' }} src={address} alt="Address" />
                    <p style={{ marginLeft: '1042px', marginTop: '-100px', display: 'block' }}>10 Maidstone Street,</p>
                    <p style={{ marginLeft: '1042px', marginTop: '-10px', display: 'block' }}>Grey Lynn,</p>
                    <p style={{ marginLeft: '1042px', marginTop: '-10px', display: 'block' }}>Auckland 1021,</p>
                    <p style={{ marginLeft: '1042px', marginTop: '-10px', display: 'block' }}>New Zealand</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='topic4'>
                <p style={{ marginLeft: '306px' }}>Our&nbsp;</p>
                <p style={{ color: '#076DE8' }} >Impact and Partnerships</p>
                <p>&nbsp;for a Better Future</p>
            </div>
            <div className='subcontent'>
                <p>Partnering with leading healthcare organisations, clinicians and providers </p>
                <p style={{ marginTop: '-10px' }}>across Australia and New Zealand to tackle real-world healthcare challenges.</p>
            </div>
            <div className="RaulandStats">
                <div className="employees">
                    <div className="employees-number">400+</div>
                    <div className="employees-text">Employees</div>
                    <div className="employees-description">
                        400+ hospital and healthcare facilities in Australia and New Zealand opt for Rauland's digitally connected solutions for their environments.
                    </div>
                </div>
                <div class="vertical-line"></div>
                <div className="customers">
                    <div className="customers-number">215+</div>
                    <div className="customers-text">Customers</div>
                    <div className="customers-description">
                        At Rauland, our team of 215+ employees is dedicated to developing future-ready technology solutions and prioritising the delivery of positive clinical outcomes.
                    </div>
                </div>
                <div class="vertical-line"></div>
                <div className="locations">
                    <div className="locations-number">6</div>
                    <div className="locations-text">Locations</div>
                    <div className="locations-description">
                        Our locations span across six locations, two countries, providing diverse coverage and a collaborative culture.
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
}

export default ContactUs2;