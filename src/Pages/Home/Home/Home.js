import React from 'react';
import BuisnessDetails from '../../BuisnessDetails/BuisnessDetails';
import Tools from '../../Tools/Tools';
import BulkSells from '../BulkSells/BulkSells';
import Review from '../Review/Review';
import Subiscribe from '../Subiscribe/Subiscribe';


import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools/>
            <Subiscribe/>
           <Review/>
           <BuisnessDetails/>
           <BulkSells/>
            
        </div>
    );
};

export default Home;