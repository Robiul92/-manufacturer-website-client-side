import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rettings = ({ review }) => {


    return (

        <div class="card w-96 bg-base-100 shadow-xl mt-5">

            <div class="card-body items-center text-center">
                <h2 class="card-title">{review.u_name}</h2>
                <div><ReactStars
                    count={5}
                    // onChange={Rettings}
                    fullIcon={<i className="fa fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    size={24}
                    activeColor="yellow"
                /></div>
                <p className='text-bold'>{review.description}?</p>


            </div>
        </div>




    );
};

export default Rettings;