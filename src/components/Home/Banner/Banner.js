import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-head'>
            <Row>
                <Col>


                    <div className='bannar-content d-flex align-items-center p-4 mt-5'>
                        <div className='mt-5'>
                            <span className='top-title'>FOR A BETTER DOCTOR</span>
                            <h1 className='banner-title'>Find A Doctor & <span className='primary-color'>Book</span> Appointment</h1>
                            <p className='banner-footer'>Since the first days of operation of Medicapps, our teaming has been focused on building a high-qualities medicals service by Medicapps</p>
                            <br />
                            <button className='appointment-btn'>Appointment</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className='img-fluid' src="https://avstechnolabs.com/Themeforest/Medicapps/assets/images/hero/02.png" alt="" srcSet="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;