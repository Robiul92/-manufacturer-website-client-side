import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams;
    const [category, setCategory] = useState({});
    const { name, price, quantity, o_quantity, description, img } = category;

    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])

    return (
        <div>
            <h1 className='text-center text-danger'>Thanks for selecting this  item: {category.name}</h1>
            <div class="card w-96 bg-base-100 shadow-xl">
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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemDetails;