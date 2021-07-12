import React from 'react';

const MenuContext = React.createContext({
    mealItems: [],
    amount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default MenuContext;