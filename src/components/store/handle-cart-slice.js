import { createSlice } from '@reduxjs/toolkit';

const menu = {
    mealItems: [],
    total: 0,
};

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: menu,
    reducers: {
        removeItem: (state, action) => {
            for (let i = 0; i < state.mealItems.length; i++) {
                if (state.mealItems[i].id === action.payload.id) {
                    //create instance of item to be decremented
                    const updatedItem = state.mealItems[i];
                    //update the total
                    const updatedTotal = state.total - updatedItem.itemCost;
                    //update item instance to account for decrement 
                    let itemUpdate = {
                        ...updatedItem,
                        itemQuantity: Number(updatedItem.itemQuantity) - action.payload.amount
                    };
                    //create copy of array to update and pass back
                    let updatedMealList = [...state.mealItems];

                    //reached 0 items check
                    if (itemUpdate.itemQuantity === 0) {
                        updatedMealList.splice(i, 1);
                        return {
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
            return menu;
        },
        addItem: (state, action) => {
            const updatedTotal = state.total + action.payload.item.itemCost * Number(action.payload.amount);
            for (let i = 0; i < state.mealItems.length; i++) {
                if (state.mealItems[i].id === action.payload.item.id) {
                    //create copy of item
                    const itemToUpdate = state.mealItems[i];
                    let updatedMealList;
                    let innerItemUpdate = {
                        ...itemToUpdate,
                        itemQuantity: itemToUpdate.itemQuantity + action.payload.amount
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
            const updatedItems = state.mealItems.concat(action.payload.item);

            return {
                mealItems: updatedItems,
                total: updatedTotal
            };
        },
        clearCart(state) {
            state.mealItems = [];
            state.total = 0;
        }
    }
});
export const menuActions = menuSlice.actions;

export default menuSlice;