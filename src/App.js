import {  } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Booking from './components/Booking/Booking';
import ContactUs from './components/ContactUs/ContactUs';
import InstructorProfile from './components/Doctors/InstructorProfile/InstructorProfile';
import Instructors from './components/Doctors/Instructors/Instructors';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Classes from './components/Service/Classes';
import Register from './components/Register/Register';
import Classes from './components/Service/Classes/Classes';
import Header from './components/Shared/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="appointments" element={<Appointment />} />
            <Route path="contact" element={<ContactUs />} />
            {/* <Route path="enroll/:courseId" element={<Enroll />} /> */}
            <Route path="doctors" element={<Instructors />} />
            <Route path="instructorProfile/:instructorId" element={<InstructorProfile />} />
            <Route path="services" element={<Classes />} /> 
            <Route path="booking/:classId" element={<Booking />} /> 
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
