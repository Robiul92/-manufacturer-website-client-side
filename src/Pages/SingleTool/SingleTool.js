import React from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../hooks/useItem';

const SingleTool = () => {
    const {id} = useParams();
    const [product] = useItem();
    const { name, price, quantity, o_quantity, description, img } = product;


    return (
        <div className='items-center flex justify-center '>
            <div class="card w-96 bg-base-100 shadow-xl ">
  <figure class="px-10 pt-10">
    <img src={img} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}!</h2>
    <p className='text-bold'>{description}?</p>
    <p>Price: ${price}</p>
    <p>Available Quantity: {quantity}</p>
    <p>Minnium Order Quantity: {o_quantity}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Checkout</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleTool;