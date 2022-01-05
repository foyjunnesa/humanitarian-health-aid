import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>

            <div className='nav'>
                <a href="home">Home</a>
                <a href="services">Services</a>
                <a href="contact">Contact</a>
                <a href="about">About Us</a>

                <div className='meet' style={{ display: 'flex', marginLeft: '400px' }}>
                    <a href="">Meet with Doctor&#10132;</a>
                    <a href="">Login&#10132;</a>
                </div>
            </div>


        </div>
    );
};

export default Header;