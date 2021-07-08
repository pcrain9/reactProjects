import React, { useState } from 'react';
import Card from '../layout/UI/Card';
import Meals from './Meals';
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

    const [orderTracker, setOrderTracker] = useState([]);

    function trackOrders(id, name, cost, quantity) {
        console.log(orderTracker);
        //check for empty array
        if (orderTracker.length === 0) {
            setOrderTracker([{
                itemId: id, 
                itemName: name,
                itemQuantity: quantity,
                itemCost: Number(cost) * Number(quantity)
            }]);
            props.onOrderUpdate(orderTracker);
            return;
        }

        //if not empty, check if name key value is in array
        for (let i = 0; i < orderTracker.length; i++) {
            if (orderTracker[i].itemName === name) {

                //copy array
                const copiedOrder = orderTracker;

                //update the info in copied array
                copiedOrder[i].itemQuantity = quantity;
                copiedOrder[i].itemCost = Number(cost) * Number(quantity);

                //set orderTracker to new order
                setOrderTracker(copiedOrder);
                props.onOrderUpdate(orderTracker);
                return;
            }
        }

        //if not found, create new array index and add item        
        setOrderTracker((prevOrder) =>
            [
                ...prevOrder,
                {
                    itemId: id,
                    itemName: name,
                    itemQuantity: quantity,
                    itemCost: Number(cost) * Number(quantity)
                }
            ]
        );
        props.onOrderUpdate(orderTracker);
    }

    return (
        <Card className={classes.mealList}>
            {mealItems.map(element =>
                <Meals
                    key={element.id}
                    name={element.name}
                    description={element.description}
                    onItemAdded={trackOrders}
                    cost={element.cost} />)}
        </Card>
    );
}

export default MealList;