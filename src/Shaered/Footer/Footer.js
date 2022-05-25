import React from 'react';
import { Link } from 'react-router-dom';
import { FaAccusoft, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-5">
            
               
                    <div className="col-md-4">
                        <ul>
                            <li><BsLaptop /> Electric-Saw Store</li>
                            <li><FaAccusoft /> Shiromoni,Khulna 9208</li>
                            <li><FaEnvelope /> esaw@gmail.com</li>
                            <li><FaMobileAlt /> 017xxxxxxxx</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/contact" className='footer-link'>Contact</Link></li>
                            <li><Link to="/about" className='footer-link'>About</Link></li>
                            <li><Link to="/privacy" className='footer-link'>Privacy</Link></li>
                            <li><Link to="/terms" className='footer-link'>Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/" className='footer-link'>Media</Link></li>
                            <li><Link to="/blog" className='footer-link'>Blog</Link></li>
                            <li><Link to="/" className='footer-link'>Forums</Link></li>
                        </ul>
                    </div>
                
                <h4 className='text-primary py-2 text-center'>All rights &copy; belongs to <span className='text-white'>
                <BsLaptop /> Laptop Store {new Date().getFullYear()}</span></h4>
            
            </footer>
    );
};

export default Footer;