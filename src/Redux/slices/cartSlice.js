import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addItemToCart: (state, action) => {
      const itemExists = state.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      } else {
        // If needed, you could log an error or handle this case elsewhere
        console.warn('Item is already in the cart!');
      }
    },
       
    removeCartItem : (state, action)=> {
      return state.filter((item)=> item.id != action.payload)
    },
    emptyCart: (state)=> {
      return state = []
    }
  }
})

export const {addItemToCart,removeCartItem,emptyCart} = cartSlice.actions

export default cartSlice.reducer