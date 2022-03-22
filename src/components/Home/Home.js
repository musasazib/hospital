import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Achievements from './Achievements/Achievements';
import Banefits from './Banefits/Banefits';
import Banner from './Banner/Banner';
import Community from './Community/Community';
import LifeTimeAccess from './LifeTimeAccess/LifeTimeAccess';
import OurInstructor from './OurInstructor/OurInstructor';
import ExploreCategory from './ExploreCategory/ExploreCategory';



const Home = () => {
    return (
        <div>
            <Banner />
            <Banefits />
            <ExploreCategory />
            <Achievements />
            <LifeTimeAccess />
            <OurInstructor />
            <Community />
            <Footer/>

        </div>
    );
};

export default Home;