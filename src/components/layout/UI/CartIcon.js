import React, { useState, useEffect } from 'react';
import classes from './CartIcon.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { bounceActions } from '../../store/handle-bounce-slice';
import CartOverlay from './CartOverlay';
import Button from './Button';


function CartIcon() {

    const dispatch = useDispatch();
    const bounceCtx = useSelector(state => state.bounceSlice.showBounce);
    const notificationCtx  = useSelector(state => state.menuSlice.mealItems.length);
    const badgeStyler = `${classes.badge} ${ bounceCtx ? classes.cart_bounce : ''}`; 
    //show cart overlay
    const [showCart, setShowCart] = useState(false);

    function displayCart() {
        setShowCart(true);
    }
    function closeCart() {
        setShowCart(false);
    }

     useEffect(() => {
         console.log("here");
        if(notificationCtx === 0){
            return;
        }
        const timeout = setTimeout(() => {
            dispatch(bounceActions.bounceIsFalse());
        }, 300);

        return () =>{ clearTimeout(timeout) };

    }, [bounceCtx, dispatch, notificationCtx]);  

    return (
        <div>
            <Button onDisplay={displayCart}
                className={classes.cartButton}>My Cart</Button>
            <span className={badgeStyler}>{notificationCtx}</span>
            {showCart && <CartOverlay
                onClose={closeCart} />}
        </div>
    );
}

export default CartIcon;