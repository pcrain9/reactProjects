import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './CartOverlay.module.css';
import Card from './Card';
import MenuContext from '../../store/handle-order';


function CartModal(props) {
    //create context variable
    const ctx = useContext(MenuContext);

    return (
        <div onClick={props.onClose} className={classes.backDrop}>
        <Card>        
            <ul className={classes.cartList}>
                {ctx.mealItems.map(element =>
                    <div key={Math.random()}>                        
                        <li className={classes.cart_items}>{element.itemName}</li>
                        <li className={classes.cart_items}>{element.itemQuantity}</li>
                        <li className={classes.cart_items}>{element.itemCost}</li>
                    </div>
                )
                }
            </ul>
            <div><h4>Total: {ctx.total}</h4></div>
            <button onClick={props.onClose}>Close Cart</button>
        </Card>
        </div>
    )
}
function CartOverlay(props) {

    return (
        <>
            {ReactDOM.createPortal(<CartModal onClose={props.onClose} />,
                document.getElementById("modalHandler"))}
        </>
    );
}

export default CartOverlay;