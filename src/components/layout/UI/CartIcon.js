import React, { useState, useContext } from 'react';
import classes from './CartIcon.module.css';
import MenuContext from '../../store/handle-order';
import CartOverlay from './CartOverlay';


function CartIcon() {
    const notificationCtx = useContext(MenuContext);

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
            <span className={classes.cartButton}>{notificationCtx.amount}</span>
            {showCart && <CartOverlay
                onClose={closeCart} />}
        </div>
    );
}

export default CartIcon;