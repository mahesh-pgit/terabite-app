import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: JSON.parse(sessionStorage.getItem("cartItems")) || [],
	},
	reducers: {
		addItem: (state, action) => {
			const index = state.cartItems.findIndex((obj) => obj.id === action.payload.id);
			index === -1
				? state.cartItems.push(action.payload)
				: (state.cartItems[index] = action.payload);
			sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		removeItem: (state, action) => {
			const index = state.cartItems.findIndex((obj) => obj.id === action.payload.id);
			state.cartItems[index] = action.payload;
			sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		clearCart: (state) => {
			state.cartItems.length = 0;
			sessionStorage.removeItem("cartItems");
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
