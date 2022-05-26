import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCatagore = ({tool}) => {
    const { _id, name, img, description, price, o_quantity, quantity} = tool;

    const navigate = useNavigate();
    const navegateToDetails = id =>{
        navigate(`/singletool/${id}`);

    }

    
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}!</h2>
    <p className='text-bold'>{description}?</p>
    <p>Price: ${price}</p>
    <p>Available Quantity: {quantity}</p>
    <p>Miniun Order Quantity:{o_quantity}</p>
    <div class="card-actions">
      <button class="btn btn-primary" onClick={() => navegateToDetails(_id)}>Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ToolCatagore;