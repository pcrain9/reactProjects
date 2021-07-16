import React from 'react';

const MenuContext = React.createContext({
    mealItems: [],
    total: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default MenuContext;