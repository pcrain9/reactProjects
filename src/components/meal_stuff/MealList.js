import React from 'react';
import Card from '../layout/UI/Card';
import Meals from './Meals';
import { useDispatch } from 'react-redux';
import { menuActions } from '../store/handle-cart-slice';
import classes from './MealList.module.css';

function MealList(props) {
    //generate the meals
    const mealItems = [{
        id: 'm1',
        name: 'Cheeseburger',
        description: 'lorem ipsum',
        cost: '10'
    },
    {
        id: 'm2',
        name: 'Hotdog',
        description: 'lorem ipsum',
        cost: '5'
    },
    {
        id: 'm3',
        name: 'Macaroni salad',
        description: 'lorem ipsum',
        cost: '2.50'
    },
    {
        id: 'm4',
        name: 'cola',
        description: 'salty',
        cost: '1'
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
                cost={element.cost} />)}
    </Card>
);
}

export default MealList;