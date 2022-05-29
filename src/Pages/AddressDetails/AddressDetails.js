import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddressDetails = () => {

    const { register, handleSubmit } = useForm();
const onSubmit = data => {
    console.log(data)
    const url = `https://serene-harbor-07570.herokuapp.com/user`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(result =>{
        
        toast('UserDetails Added')
        console.log(result);
    })
}
    return (
        <div className='flex justify-center mt-5'>
            <div className='card w-96 bg-base-100 shadow-xl items-center flex justify-center'>
            <h1 className='text-center text-danger'>Add a New Item</h1>
            <div className=''>
            <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 form-control w-full max-w-xs' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3 form-control w-full max-w-xs'  placeholder='Address'{...register("description")} />
                <input className='mb-3 form-control w-full max-w-xs'  placeholder='Price'type="number" {...register("price")} />
                <input className='mb-3 form-control w-full max-w-xs'  placeholder='Minnium order Quantity'type="number" {...register("o_quantity")} />
                <input className='mb-3 form-control w-full max-w-xs'  placeholder='Quantity'type="number" {...register("quantity")} />
                <input className='mb-3 form-control w-full max-w-xs'  placeholder='Phone number'type="number" {...register("quantity")} />
                
                <input className='btn w-full max-w-xs text-white' type="submit" value="Confrom" />
            </form>
            </div>
        </div>
        </div>
    );
};

export default AddressDetails;