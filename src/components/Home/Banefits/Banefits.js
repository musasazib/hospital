import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import learning from '../../../photos/learning.png'
import source from '../../../photos/source.png'
import efficency from '../../../photos/out-line.png'
import './Banefits.css'

const Banefits = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={learning} alt="" srcSet="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Conducts eye health checkups</h3>
                                <p className='benefit-content'>Gives seniors the confidence to remain independent in a professionally managed environment.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={source} alt="" srcSet="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Best lasik treatment</h3>
                                <p className='benefit-content'>An elderly person needs to feel safe, remain close to other people and believe that life continues</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <img className='img-fluid' src={efficency} alt="" srcSet="" />

                            <div className='ms-4'>
                                <h3 className='benefit-title'>Treats minor illnesses</h3>
                                <p className='benefit-content'>We offer skilled nursing services at all of our locations with professionally trained nursing staff.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banefits;