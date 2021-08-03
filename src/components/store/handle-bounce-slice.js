import { createSlice } from '@reduxjs/toolkit';

const bounceSlice = createSlice({
    name: 'bounce',
    initialState: { showBounce: false },
    reducers:{
        bounceisTrue(state) {
            state.showBounce = true;
        },
        bounceIsFalse(state) {
            state.showBounce = false;
        }
    }
});

export const bounceActions = bounceSlice.actions;
export default bounceSlice;