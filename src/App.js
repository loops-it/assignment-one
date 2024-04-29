import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
//import ContactUs from './Frontend/ContactUs';
//import ContactUs2 from './Frontend/ContactUs2';
//import Appointment from './Frontend/Appointment';
//import Footer from './Frontend/Footer';
import Main from './Frontend/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/*<Route path='/' element={<ContactUs />}></Route>*/}
          {/*<Route path='/' element={<ContactUs2 />}></Route>*/}
          {/*<Route path='/' element={<Appointment />}></Route>*/}
          {/*<Route path='/' element={<Footer />}></Route>*/}
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
