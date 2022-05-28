import React from 'react';
import './Subiscribe.css'

const Subiscribe = () => {
    return (
        <div className="subscribe py-5 bg-base-200">
            <div className="text-center">
                <div className="subscribe-title">
                    <h4 className='text-center'>Keep in touch with us</h4>
                    <p>To know more and get updated about our stokes please connect with us and give your email address... We will contact you with your email address...</p>
                </div>
                <form className='w-74 mx-auto d-flex mt-4 '>
                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mx-2" />
                    <input type="submit" value="SUBMIT" className="btn btn-primary ms-2" />
                </form>
            </div>
        </div>
    );
};

export default Subiscribe;