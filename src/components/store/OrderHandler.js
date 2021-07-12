import React, { useReducer } from 'react';

import MenuContext from './handle-order';

const emptyCart = {
    mealItems:[],
    total: 0,
};

function cartReducer (state, action){
    if(action.type === "ADD"){
        const updatedItems = state.mealItems.concat(action.item);
        const updatedTotal = state.total + action.itemCost * action.itemQuantity;

        return{mealItems: updatedItems,
        amount: updatedTotal};
    }
    if(action.type === "REMOVE"){

    }
    return emptyCart;
}
function OrderHandler(props){

    const [cartState, cartDispatcher] = useReducer(cartReducer, emptyCart)

    function addItemtoCartHandler (mealItem){
        cartDispatcher({type: "ADD", item: mealItem});
    }
    
    function removeItemfromCartHandler (id){
        
    }

    const userCart = {
        mealItems: cartState.mealItems,
        amount: cartState.amount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemfromCartHandler
    }

    return <MenuContext.Provider value = {userCart}>
    {props.children}
    </MenuContext.Provider>
}

export default OrderHandler;