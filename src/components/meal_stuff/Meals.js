import React, { useState } from 'react';
import Card from '../layout/UI/Card';
import classes from './Meals.module.css';

function Meals(props) {

    const [mealCount, setMealCount] = useState('0');
    
    function incrementMealsClick() {
        setMealCount(Number(mealCount + 1));
        props.onItemAdded(props.id, props.name, props.cost, mealCount);
    }
    function incrementMealsType(event) {
        setMealCount(Number(event.target.value));
        props.onItemAdded(props.id, props.name, props.cost, mealCount);        
    }

    return (
        <Card className={classes.meal}>
            <div className={classes.userInteractItems}>
                <label htmlFor={classes.amount}>How many? </label>
                <input type='number'
                    min='0'
                    max='100'
                    id={classes.userId}
                    placeholder={mealCount}
                    onChange={incrementMealsType} /><br />
                <button className={classes.addButton}
                    onClick={incrementMealsClick}>Add+</button>
            </div><h2>{props.name}</h2>
            <p>{props.description}</p>
            <h4>${props.cost}</h4>
        </Card>
    )
}

export default Meals;