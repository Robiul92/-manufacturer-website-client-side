import React from 'react';
import img from '../../../Image/sells.png'



const BulkSells = () => {

  
    return (
      <div class="hero min-h-screen bg-white-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={img} alt="" />
        <div>
          <h1 class="text-5xl font-bold">DON'T WAIT FOR ANYTHING. BUY IT NOW</h1>
          <p class="py-6">In Electric-SAW, you can also find other good deals on saw! Check out Electric-SAW, enjoy a wonderful shopping experience! Make online shopping a smooth and simple.</p>
          <button class="btn btn-warning">Shop and Save</button>
        </div>
      </div>
    </div>
            
       
    );
};

export default BulkSells;