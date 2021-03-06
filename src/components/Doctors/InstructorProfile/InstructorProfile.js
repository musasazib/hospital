import React, { useEffect, useState } from 'react';
import './InstructorProfile.css';
import { useParams } from 'react-router-dom';

const InstructorProfile = () => {
    const { instructorId } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details)
    useEffect(() => {
        fetch('https://shielded-fortress-26977.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === instructorId);
                setDetails(book)

            });

    }, [instructorId, details])
    return (
        <div className='instructor-profile'>
            <h1 className="pt-5 pb-5 text-center course-details-bg">
                About Doctor
            </h1>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img className='instructor-details-img' src={details?.picture} alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h3 className='instructor-name-single'>{details?.instructorName}</h3>
                        <p>{details?.instructorDesignation}</p>
                        <h6 className='mb-3'><strong>Phone Number:</strong> {details?.phone}</h6>
                        <h6 className='mb-3'><strong>Email:</strong> {details?.email}</h6>
                        <h6 className='mb-3'><strong>Experience:</strong> {details?.Experience}</h6>
                        <h6 className='mb-3'><strong>Address:</strong> {details?.Address}</h6>
                        <p className='mb-5 instructor-details'>{details?.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;