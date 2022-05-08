import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer'>
            <footer className='text-center mt-5'>
                <h3 >Contact US</h3>
                <a href='chotogolpo@gmailcom'>CarHaunter@gmail.com</a>
                <p><small>copyright @ {year} </small></p>
            </footer>
        </div>
    );
};

export default Footer;