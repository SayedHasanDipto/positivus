import logoImg from '../assets/logo.png'
import './Navbar.css'
import React from 'react';

const Navbar = () => {
    return (
        <div className='container border mx-auto mt-10 space-grotesk space-grotesk'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src={logoImg} alt="logoImg" />
                </div>
                <div className="flex-none">
                    <ul className='flex gap-10 items-center text-xl'>
                        <li><a href="/">About us</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/Use Cases">Use Cases</a></li>
                        <li><a href="/Pricing">Pricing</a></li>
                        <li><a href="/Blog">Blog</a></li>
                        <button className='btn btn-outline font-medium text-xl'>Request a quote</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;