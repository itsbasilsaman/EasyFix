import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name:'wishList',
  initialState: [],
  reducers : {
    // to add item to the store 
    addWishListItem: (state, action) => {
      const itemExists = state.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload); // Add item to the wishlist
      } else {
        console.warn('Item is already in the wishlist!'); // You could also display a message
      }
    },
    removeWishlistItem :(state, action) => {
      return state.filter((item)=> item.id != action.payload)
    }
  }
})

export const {addWishListItem , removeWishlistItem}  = wishlistSlice.actions
export default wishlistSlice.reducer 