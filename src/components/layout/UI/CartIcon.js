import React, { useState, useContext } from 'react';
import classes from './CartIcon.module.css';
import MenuContext from '../../store/handle-order';
import CartOverlay from './CartOverlay';
import Button from './Button';


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
            <Button onDisplay={displayCart}
                className={classes.cartButton}>My Cart</Button>
            <span className={classes.badge}>{notificationCtx.mealItems.length}</span>
            {showCart && <CartOverlay
                onClose={closeCart} />}
        </div>
    );
}

export default CartIcon;