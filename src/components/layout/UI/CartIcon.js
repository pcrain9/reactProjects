import React, { useState } from 'react';
import CartOverlay from './CartOverlay';
import classes from './CartIcon.module.css';


function CartIcon() {

    //show cart overlay
    const [showCart, setShowCart] = useState(false);

    function displayCart() {
        setShowCart(true);
    }
    function closeCart() {
        setShowCart(false);
    }

    return (
        <div>
            <button onClick={displayCart}
                className={classes.cartButton}>My Cart</button>
            {showCart && <CartOverlay
                onClose={closeCart} />}
        </div>
    );
}

export default CartIcon;