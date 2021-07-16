import React, { useReducer } from 'react';

import MenuContext from './handle-order';

const emptyCart = {
    mealItems: [],
    total: 0,
};

function cartReducer(state, action) {
    if (action.type === "ADD") {
        for (let i = 0; i < state.mealItems.length; i++) {
            if (state.mealItems[i].id === action.item.id) {
                const updatedItems = state.mealItems;
                const updatedTotal = state.total + action.item.itemCost * Number(action.item.itemQuantity);
                updatedItems[i].itemQuantity += action.item.itemQuantity;

                return {
                    mealItems: updatedItems,
                    total: updatedTotal
                };
            }
        }
        const updatedItems = state.mealItems.concat(action.item);
        const updatedTotal = state.total + action.item.itemCost * Number(action.item.itemQuantity);

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