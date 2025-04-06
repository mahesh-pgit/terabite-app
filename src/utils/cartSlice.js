import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: [],
	},
	reducers: {
		addItem: (state, action) => {
			const index = state.cartItems.findIndex((obj) => obj.id === action.payload.id);
			index === -1
				? state.cartItems.push(action.payload)
				: (state.cartItems[index] = action.payload);
		},
		removeItem: (state, action) => {
			const index = state.cartItems.findIndex((obj) => obj.id === action.payload.id);
			state.cartItems[index] = action.payload;
		},
		clearCart: (state) => {
			state.cartItems.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
