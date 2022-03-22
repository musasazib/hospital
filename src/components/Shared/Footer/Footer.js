import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-light pt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 text-start">
                            <img className="image-style" src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/post-thumb-1.jpg" alt="" style={{ width: "125px" }} />
                            <p>Copyright © 2019 | All Rights Reserved.</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">Quick Links</h4>
                            <p className="footer-text">- Surgery & Radiology</p>
                            <p className="footer-text">- Family Medicine</p>
                            <p className="footer-text">- Optician</p>
                            <p className="footer-text">- Dermatology</p>
                            <p className="footer-text">- Contact Us</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">About Us</h4>
                            <p className="footer-text">Our Story</p>
                            <p className="footer-text">Information</p>
                            <p className="footer-text">Women's Health</p>
                            <p className="footer-text">Doctors</p>
                            <p className="footer-text">Be Our Partner</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3 footer-text-all">
                            <h4 className="footer-text footer-h2">Support</h4>
                            <p className="footer-text">- Customer Support</p>
                            <p className="footer-text">- Privacy & Policy</p>
                            <p className="footer-text">- Terms & Condition</p>
                            <p className="footer-text">- Order Return</p>
                            <p className="footer-text">- Online Payment</p>
                            {/* <img src={image} alt="" /> */}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;