import React from 'react';
import Card from '../layout/UI/Card';
import classes from './Meals.module.css';

function Meals(props){
    return(
        <Card className={classes.meal}>            
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <h4>{props.cost}</h4>            
        </Card>
    )
}

export default Meals;