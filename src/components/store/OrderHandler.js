import React from 'react';

import MenuContext from './handle-order';

function OrderHandler(props){

    function addItemtoCartHandler (item){

    }
    
    function removeItemfromCartHandler (id){
        
    }

    const userCart = {
        items: [],
        itemCount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemfromCartHandler
    }

    return <MenuContext.Provider value = {userCart}>
    {props.children}
    </MenuContext.Provider>
}

export default OrderHandler;