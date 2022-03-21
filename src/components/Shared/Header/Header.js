import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';
const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="header-left header-style">
                        <a className='p-4' href="tel:+0-8700-900">Contact: +0-8700-900</a>
                        <a href="tel:+1-8700-911">Emergency: +1-8700-911</a>
                    </div>
                    {
                        user?.email ?

                            <div className="header-right header-style d-flex">
                                <div className='me-2'>
                                    <p className='user-p-head'>{user?.displayName}</p>
                                </div>
                                <div className='ms-2'>
                                    <p className='user-p-head' onClick={logOut}>Log Out</p>
                                </div>
                            </div> :
                            <div className="header-right header-style d-flex">
                                <div className='me-2'>
                                    <Link to="/login">Log In</Link>
                                </div>
                                <div className='ms-2'>
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;