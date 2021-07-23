import React, { useReducer } from 'react';

import MenuContext from './handle-order';

const emptyCart = {
    mealItems: [],
    total: 0,
};

function cartReducer(state, action) {
    if (action.type === "ADD") {
        const updatedTotal = state.total + action.item.itemCost * Number(action.item.itemQuantity);
        for (let i = 0; i < state.mealItems.length; i++) {
            if (state.mealItems[i].id === action.item.id) {
                //create copy of item
                const itemToUpdate = state.mealItems[i];
                let updatedMealList;
                let innerItemUpdate = {
                    ...itemToUpdate,
                    itemQuantity: itemToUpdate.itemQuantity + action.item.itemQuantity
                };
                //copy state array here
                updatedMealList = [...state.mealItems];
                //change copied state here
                updatedMealList[i] = innerItemUpdate;

                return {
                    mealItems: updatedMealList,
                    total: updatedTotal
                };
            }
        }
        const updatedItems = state.mealItems.concat(action.item);

        return {
            mealItems: updatedItems,
            total: updatedTotal
        };
    }

    if (action.type === "REMOVE") {
        //get correct id
        
        for (let i = 0; i < state.mealItems.length; i++) {
            if (state.mealItems[i].id === action.id) {
                //create instance of item to be decremented
                const updatedItem = state.mealItems[i];
                //update the total
                const updatedTotal = state.total - updatedItem.itemCost;
                //update item instance to account for decrement 
                let itemUpdate = {
                    ...updatedItem,
                    itemQuantity: Number(updatedItem.itemQuantity) - 1
                };
                //create copy of array to update and pass back
                let updatedMealList = [...state.mealItems];

                //reached 0 items check
                if (itemUpdate.itemQuantity === 0) {
                    updatedMealList.splice(i, 1);
                    return{
                        mealItems: updatedMealList, 
                        total: updatedTotal
                    };
                }

                //write new item info into copied array
                updatedMealList[i] = itemUpdate;

                return {
                    mealItems: updatedMealList,
                    total: updatedTotal
                };
            }
        }
    }

    return emptyCart;
}

function OrderHandler(props) {

    const [cartState, cartDispatcher] = useReducer(cartReducer, emptyCart)

    function addItemtoCartHandler(mealItem) {
        cartDispatcher({ type: "ADD", item: mealItem });
    }

    function removeItemfromCartHandler(id) {
        cartDispatcher({ type: "REMOVE", id: id })
    }

    const userCart = {
        mealItems: cartState.mealItems,
        total: cartState.total,
        addItem: addItemtoCartHandler,
        removeItem: removeItemfromCartHandler
    }

    return <MenuContext.Provider value={userCart}>
        {props.children}
    </MenuContext.Provider>
}

export default OrderHandler;