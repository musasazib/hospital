import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import achivementMan from '../../../photos/achievements-img.png'
import counterImg from '../../../photos/counter-shape.png'

import './Achivements.css'
const Achievements = () => {
    return (
        <Container className='my-4'>
            <Row>
                <Col >
                    <Row className='achivement'>
                        <Col sm={3} className='p-4' ><img className='img-fluid' src={achivementMan} alt="" srcSet="" /></Col>
                        <Col sm={8} className='mt-5 '>
                            <h3 className='font-weight-bold'>Our Achievements</h3>
                            <p>Independent Living is a living option for residents to enjoy the freedom.</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <img className='img-fluid ' src={counterImg} alt="" srcSet="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h3>250+</h3>
                        <p>Departments & Test</p>
                    </div>

                </Col>
                <Col>
                    <div>
                        <h3>125,000+</h3>
                        <p>Patient Took Care</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3>100+</h3>
                        <p>Departments Doctors</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h3>100%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Achievements;