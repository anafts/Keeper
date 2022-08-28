import React from 'react';



function Footer() {

    const year = new Date().getFullYear()
    
    return (
        <footer>
            <p> &copy; copyright {year}, Ana Freitas </p>
        </footer>
    );
};

export default Footer;