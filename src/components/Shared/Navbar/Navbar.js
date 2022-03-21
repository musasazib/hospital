import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="navbar-left">
                        <Link to={'/'}><img src="https://i.ibb.co/2tVzzvN/logo-5.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center navbar-style">
                        <Link className='p-4' to="/home">Home</Link>
                        <Link className='p-4' to="/doctors">Doctors</Link>
                        <Link className='p-4' to="/appointments">Appointments</Link>

                        <Link className='p-4' to="/services">Services</Link>
                        <Link className='p-4' to="/contact">Contact</Link>

                    </div>
                    <div className="navbar-right">
                        <div className="search-container">
                            <input className='navbar-input' placeholder="Search doctors..." type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;