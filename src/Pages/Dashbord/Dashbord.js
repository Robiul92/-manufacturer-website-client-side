import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content  ">
    <h2 className='text-2xl font-bold text-purple-500'>Wel Come to Your Dashbord</h2>
    <Outlet/>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashbord'> Sidebar Item 1</Link></li>
      <li><Link to='/dashbord/review'> Sidebar Item 1</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;