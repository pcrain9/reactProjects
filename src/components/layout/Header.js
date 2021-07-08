import React from 'react';
import classes from './Header.module.css';
import CartIcon from './UI/CartIcon';


function Header() {
    return (
        
            <div className={classes.header}>
                <h2>My Food Ordering App</h2>
                <CartIcon />
            </div>
      
    );
}

export default Header;