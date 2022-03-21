import {  } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
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
            {/* <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} /> */}
            {/* <Route path="courses" element={<Courses />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="enroll/:courseId" element={<Enroll />} />
            <Route path="instructors" element={<Instructors />} />
            <Route path="instructorProfile/:instructorId" element={<InstructorProfile />} />
            <Route path="blogs" element={<Blogs />} /> */}
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
