import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItem from '../hooks/useItem';

const SingleTool = () => {
  const { id } = useParams();
  const [product] = useItem();
  const { name, price, quantity, o_quantity, description, img } = product;

  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/addressdetails')
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/tool`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)

    })
      .then(res => res.json())
      .then(result => {

        toast('Item Added')
        console.log(result);
      })

  };

  const ReStock = e => {
    
    e.preventDefault();
    console.log(e.target.reStock.value);
    const quantity = (e.target.reStock.value) + parseInt(product.quantity);
    console.log(quantity);


    const updateRestock = { quantity };
    console.log(updateRestock);
    const url = `http://localhost:5000/tool/${id}`;
    console.log(url);
    fetch(url, {
        method: 'PUT',

        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(
            updateRestock
        ),
    })
        .then(response => response.json())
        .then(data => {
            e.target.reset();
            toast('Restok success')
            console.log(data);

        });

}



const handleQuantity = e => {

  e.preventDefault();
  const quantity = parseInt(e.target.quantity.value) + parseInt(product.quantity);
  const updateQuantity = { quantity }
  console.log(updateQuantity);
  const url = `https://fathomless-lake-76602.herokuapp.com/inventory/${id}`;
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(
      updateQuantity
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => {
      // setProducts(data)
      toast('Product Deliverd Success')
      console.log(data);

    });
}



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
          
          <form className='card-body' onSubmit={handleQuantity}>

            <p>Quantity: </p>
            <input className='ms-2 border border-white' type="number" name="quantity" value={product.quantity} readOnly />

            <button className='btn btn-primary'>DELIVERD</button>
          </form>


        </div>

      </div>
    </div>
    <div>
      <div className='flex justify-center mt-5'>
        <div className='card w-96 bg-base-100 shadow-xl items-center flex justify-center'>
          <h1 className='text-center text-danger'>Add a New Item</h1>
          <div className=''>
            <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
              <input className='mb-3 form-control w-full max-w-xs' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
              <textarea className='mb-3 form-control w-full max-w-xs' placeholder='Address'{...register("description")} />
              <input className='mb-3 form-control w-full max-w-xs' placeholder='Price' type="number" {...register("price")} />
              <input className='mb-3 form-control w-full max-w-xs' placeholder='Minnium order Quantity' type="number" {...register("o_quantity")} />
              <input className='mb-3 form-control w-full max-w-xs' placeholder='Quantity' type="number" {...register("quantity")} />
              <input className='mb-3 form-control w-full max-w-xs' placeholder='Phone number' type="number" {...register("quantity")} />

              <input className='btn w-full max-w-xs text-white' type="submit" value="Confrom" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

);
};

export default SingleTool;