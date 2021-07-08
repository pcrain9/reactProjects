import React from 'react';
import classes from './CartOverlay.module.css';
import Card from './Card';

function CartOverlay() {
    return (
        <Card>
            <form className={classes.cartForm}>

                <label>Display current items in here, probably as a map()</label>
                <h3>Total: ${}</h3>

            </form>

        </Card>
    )
}

export default CartOverlay;