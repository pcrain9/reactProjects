import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import classes from './CartOverlay.module.css';
import Card from './Card';
import MenuContext from '../../store/handle-order';
import Button from './Button';

function BackgroundModal(props) {
    return (
        <div onClick={props.onClose} className={classes.backDrop}>{props.children}</div>
    )
}
function CartModal(props) {
    //create context variable
    const ctx = useContext(MenuContext);
    const formCtrl = useRef();

    function submitHandler(event){
        event.preventDefault();
        
    }

    return (
        <Card className={classes.cartList}>
            <div className={classes.cartList}>
                {ctx.mealItems.map(element =>

                    <Card className={classes.cart_items} key={Math.random()}>
                        <h3>{element.itemQuantity} {element.itemName}(s)....</h3>
                        <h3>${Number(element.itemCost).toFixed(2)}</h3>

                        <form className={classes.cart_item_form}
                        onSubmit= {submitHandler}>
                            <input
                                className={classes.cart_item_input}
                                type='number'
                                min='0'
                                max='10'
                                value={element.itemQuantity} />
                            <button className={classes.cart_item_buttons}>-Remove</button>
                            <button className={classes.cart_item_buttons}>+Add</button>
                        </form>
                    </Card>


                )
                }

                <h2 className={classes.total}>Total: ${Number(ctx.total).toFixed(2)}</h2>
                <div className={classes.separate_buttons}>
                    <Button onClose={props.onClose}>Close Cart</Button>
                    <Button onClose={props.onClose}>Place Your Order!</Button>
                </div>
            </div>
        </Card>
    )
}
function CartOverlay(props) {

    return (
        <>

            {ReactDOM.createPortal(<CartModal onClose={props.onClose} />,
                document.getElementById("modalHandler"))}
            {ReactDOM.createPortal(<BackgroundModal onClose={props.onClose} />,
                document.getElementById("backGround"))}
        </>
    );
}

export default CartOverlay;