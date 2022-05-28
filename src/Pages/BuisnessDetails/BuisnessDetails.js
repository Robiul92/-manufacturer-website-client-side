import React from 'react';
import image1 from '../../Image/bd-4.png'
import image2 from '../../Image/bn-2.png'
import image3 from '../../Image/bn-5.png'
const BuisnessDetails = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold p-5'>Reviewes</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-7 mb-7 '> 
            <div className='grid justify-items-center'>
                <img className='object-cover h-20 w-90' src={image1} alt="" />
                <h1 className='text-2xl font-bold'>10K+ Setisfied Coustomer</h1>
            </div>
            <div className='grid justify-items-center'>
                <img className='object-cover h-20 w-90' src={image2} alt="" />
                <h1 className='text-2xl font-bold'>Fastest Ontime Delivery</h1>
            </div>
            <div className='grid justify-items-center'>
                <img className='object-cover h-20 w-50' src={image3} alt="" />
                <h1 className='text-2xl font-bold' >30% Sell Increacing</h1>
            </div>
        </div>
        </div>
    );
};

export default BuisnessDetails;