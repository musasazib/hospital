import React, { useEffect, useState } from 'react';
import Classify from '../Classify/Classify';
import './Classes.css';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://shielded-fortress-26977.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div id="classes">
            <div className="text-center m-5 pt-5">
                <h1 className="text-name-color mt-5">OUR POPULAR SERVICES</h1>
                <h4>Visudo Search uses functional cookies and non-personalized content. Click 'OK' to allow us and our partners to use your data for the best experience!
                    Mel et impetus fibulas consequently.</h4>
            </div>
            <div className="classify-container">
                {
                    classes.map(classify => <Classify
                        key={classify.id}
                        classify={classify}
                    ></Classify>)
                }
            </div>
        </div>
    );
};

export default Classes;