import React, { useContext } from 'react';
import classes from './CartOverlay.module.css';
import Card from './Card';
import MenuContext from '../../store/handle-order';


function CartOverlay(props) {

    //create context variable
    const ctx = useContext(MenuContext);

    return (
        <Card>
            {ctx.menu.map(element =>
                <ul onClick={props.onClose}
                key={element.itemId}>
                    <li>{element.itemName}</li>
                    <li>{element.itemQuantity}</li>
                    <li>{element.itemCost}</li>
                </ul>
            )}
            <button onClick={props.onClose}>Close Cart</button>
        </Card>
    )
}

export default CartOverlay;