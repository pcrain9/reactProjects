import React from 'react';

import Card from '../layout/UI/Card';
import Meals from './Meals';
import { useDispatch } from 'react-redux';
import { menuActions } from '../store/handle-cart-slice';
import classes from './MealList.module.css';

import burger from '../layout/pics/cheeseburger.png';
import hotdog from '../layout/pics/hotdog.png';
import coleslaw from '../layout/pics/coleslaw.png';
import coke from '../layout/pics/coke.png';

function MealList(props) {
    //generate the meals
    const mealItems = [{
        id: 'm1',
        name: 'Cheeseburger',
        description: 'juicy!',
        cost: '10',
        image: burger
    },
    {
        id: 'm2',
        name: 'Hotdog',
        description: 'snappy!',
        cost: '5',
        image: hotdog
    },
    {
        id: 'm3',
        name: 'Macaroni salad',
        description: 'quite creamy',
        cost: '2.50',
        image: coleslaw
    },
    {
        id: 'm4',
        name: 'cola',
        description: 'fizzy!',
        cost: '1',
        image: coke
    }];

    const dispatch = useDispatch();

    function trackOrders(id, name, cost, quantity) {

        const newItem = {
            id: id,
            itemName: name,
            itemCost: cost,
            itemQuantity: quantity
        };
        dispatch(menuActions.addItem({item: newItem, amount: quantity}));
    }

return (
    <Card className={classes.mealList}>
        {mealItems.map(element =>
            <Meals
                key={element.id}
                id={element.id}
                name={element.name}
                description={element.description}
                onItemAdded={trackOrders}
                cost={element.cost}
                image={element.image} />)}
    </Card>
);
}

export default MealList;