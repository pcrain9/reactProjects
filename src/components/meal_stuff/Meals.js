import React, { useRef } from 'react';
import Card from '../layout/UI/Card';
import classes from './Meals.module.css';

function Meals(props) {

    const mealNumberStatus = useRef();

    function addItemHandler(event){
        event.preventDefault();
        const amountEntered = mealNumberStatus.current.value;
        const numberAmountEntered = +amountEntered;

        if(amountEntered === '0' || numberAmountEntered < 1 || numberAmountEntered>5){
            return;
        }

        props.onItemAdded(props.id, props.name, props.cost, numberAmountEntered);
    }


    return (
        <Card className={classes.meal}>
            <form className={classes.userInteractItems}
                onSubmit={addItemHandler}>
                <label htmlFor={classes.amount}>How many? </label>
                <input 
                    ref={mealNumberStatus}
                    type='number'
                    min='1'
                    defaultValue='1'
                    max='10'
                    step='1'
                    id={classes.userId}/><br />
                <button className={classes.addButton}>Add+</button>
            </form>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h4>${props.cost}</h4>
        </Card>
    )
}

export default Meals;