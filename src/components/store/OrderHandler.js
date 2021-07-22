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

    }
    return emptyCart;
}
function OrderHandler(props) {

    const [cartState, cartDispatcher] = useReducer(cartReducer, emptyCart)

    function addItemtoCartHandler(mealItem) {
        cartDispatcher({ type: "ADD", item: mealItem });
    }

    function removeItemfromCartHandler(id) {

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