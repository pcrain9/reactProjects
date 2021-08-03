import React, { useState } from 'react';
import classes from './CartIcon.module.css';
import { useSelector } from 'react-redux';
import CartOverlay from './CartOverlay';
import Button from './Button';


function CartIcon() {
    const notificationCtx = useSelector(state => state.total);

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
            <Button onDisplay={displayCart}
                className={classes.cartButton}>My Cart</Button>
            <span className={classes.badge}>{notificationCtx.total}</span>
            {showCart && <CartOverlay
                onClose={closeCart} />}
        </div>
    );
}

export default CartIcon;