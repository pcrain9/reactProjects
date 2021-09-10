import React from 'react';
import ReactDOM from 'react-dom';
import classes from './CartOverlay.module.css';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux'; 
import { menuActions } from '../../store/handle-cart-slice';
import Button from './Button';

function BackgroundModal(props) {
    return (
        <div onClick={props.onClose} className={classes.backDrop}>{props.children}</div>
    )
}

function CartModal(props) {
    //create context variable
    const ctx = useSelector(state => state.menuSlice.mealItems);
    const totalCtx = useSelector(state => state.menuSlice.total);
    const dispatch = useDispatch();

    function decrementItem(id, amount) {
        dispatch(menuActions.removeItem({id: id, amount: amount}));
    }

    function incrementItem(item, amount) {
        dispatch(menuActions.addItem({item: item, amount: amount}));
    }

    return (
        <Card className={classes.cartList}>
            <div className={classes.cartList}>
                {ctx.map(element =>
                    <Card className={classes.cart_items} key={Math.random()}>
                        <h3>{element.itemQuantity} {element.itemName}(s)....</h3>
                        <h3>${Number(element.itemCost * element.itemQuantity).toFixed(2)}</h3>

                        <div className={classes.cart_item_form}>
                            <p className={classes.cart_item_input}>{element.itemQuantity}</p>
                            <button className={classes.cart_item_buttons}
                                onClick={() => decrementItem(element.id, 1)}>-Remove</button>
                            <button className={classes.cart_item_buttons}
                            onClick={() => incrementItem(element, 1)}>+Add</button>
                        </div>
                    </Card>
                )
                }

                <h2 className={classes.total}>Total: ${Number(totalCtx).toFixed(2)}</h2>
                <div className={classes.separate_buttons}>
                    <Button 
                    className={classes.close_order_buttons}
                    onClose={props.onClose}>Close Cart</Button>
                    {ctx.length !== 0 && <Button 
                    className={classes.close_order_buttons}
                    onOrderWasPlaced={props.onOrderWasPlaced}>Place Your Order!</Button>}
                </div>
            </div>
        </Card>
    )
}
function CartOverlay(props) {

    return (
        <>

            {ReactDOM.createPortal(<CartModal onClose={props.onClose} onOrderWasPlaced={props.onOrderWasPlaced} />,
                document.getElementById("modalHandler"))}
            {ReactDOM.createPortal(<BackgroundModal onClose={props.onClose} />,
                document.getElementById("backGround"))}
        </>
    );
}

export default CartOverlay;