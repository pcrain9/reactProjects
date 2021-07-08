import React, { useState } from 'react';
import Card from '../layout/UI/Card';
import Meals from './Meals';
import classes from './MealList.module.css';

function MealList() {
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

    const [orderTracker, setOrderTracker] = useState([{
        itemName:'',
        itemCost:'',
        total:''
    }]);

    function trackOrders(name, cost, quantity) {
        //check for empty array
        if(orderTracker.length === 1 && orderTracker[0].itemName===''){
            setOrderTracker([{
                itemName: name,
                itemQuantity: quantity,
                total: cost
            }]);
            console.log(orderTracker);
            return;
        }
        //if not empty, check if key value is in array
        for (let i of orderTracker) {
            if (orderTracker[i].itemName === name) {
                setOrderTracker(orderTracker[i] = {
                    itemQuantity: quantity,
                    total: Number(cost) * Number(quantity)
                });
                console.log(orderTracker);
                return;
            }
        }

        //if not found, create new array index and add item
        setOrderTracker((prevOrder) => [
            ...prevOrder,
            {
                itemName: name,
                itemQuantity: quantity,
                cost: Number(cost) * Number(quantity)
            }
        ]);
        console.log(orderTracker); 
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