import React, { useEffect, useState } from 'react';
import Rettings from '../Rettings/Rettings';



const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`retting.json`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
                reviews.slice(-6).map(review => <Rettings
                    key={review._id}
                    review={review}
                />)
           }
        </div>
    );
};

export default Review;