import React from 'react';
import './OurInstructor.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles -----
import "swiper/css";
import { Link } from 'react-router-dom';

const OurInstructor = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-5">
                    <h4 className='instructor-title'>These Are Our Doctors</h4>
                    <p className='instructor-paragraph'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                        <br />
                        <br />
                        Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, egettincidunt nibh pulvinar ultricies ligula sed magna dictum porta.</p>
                    <br />  
                    <p><Link to="/instructors">
                    <button className='instructor-btn'>Doctors</button>
                    </Link></p>
                </div>
                <div className="col-12 col-md-7 ">
                    <div className='instrctor-group '>
                        <Swiper watchSlidesProgress={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Jesse Joplin</h3>
                                <p className='instructor-designation'>Pulmonary</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Lance Altman</h3>
                                <p className='instructor-designation'>Pulmonary</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/doctor-tahu-bulat-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Sally Welch</h3>
                                <p className='instructor-designation'>Dental</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Willie Mcdonald</h3>
                                <p className='instructor-designation'>Neurologist</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Jesse Joplin</h3>
                                <p className='instructor-designation'>Pulmonary</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-1.jpg" alt="" />
                                <h3 className='instructor-name'>Lance Altman</h3>
                                <p className='instructor-designation'>Pulmonary</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Dr-Kathirnia-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Sally Welch</h3>
                                <p>Dental</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/pediactirc-Doctors-e1460536658595-280x280.jpg" alt="" />
                                <h3 className='instructor-name'>Willie Mcdonald</h3>
                                <p className='instructor-designation'>Neurologist</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInstructor;