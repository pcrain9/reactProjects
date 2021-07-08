import React, { useState } from 'react';
import CartOverlay from './CartOverlay';
import classes from './CartIcon.module.css';


function CartIcon() {

    //show cart overlay
    const [showCart, setShowCart] = useState(false);

    function displayCart() {
        setShowCart(true);
    }

    return (
        <div>
        <button onClick={displayCart}
            className={classes.cartButton}>My Cart</button>
        { showCart && <CartOverlay /> }
        </div>
    );
}

export default CartIcon;