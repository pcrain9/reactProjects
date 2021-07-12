import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './CartOverlay.module.css';
import Card from './Card';
import MenuContext from '../../store/handle-order';


function CartOverlay(props) {

    //create context variable
    const ctx = useContext(MenuContext);

    return (
        {ReactDOM.createPortal(<Card>
            <ul onClick={props.onClose}
                className={classes.cartList}
                key={classes.itemId}>
                {ctx.mealItems.map(element =>
                    <>
                        <li>{element.itemName}</li>
                        <li>{element.itemQuantity}</li>
                        <li>{element.itemCost}</li>
                    </>)
                }
            </ul>
            <button onClick={props.onClose}>Close Cart</button>
        </Card>, document.getElementById('modalHandler')}
    );
}

export default CartOverlay;