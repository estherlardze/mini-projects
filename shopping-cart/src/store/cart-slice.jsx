import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
      addToCart(state, action) {
        const newItem = action.payload

        const existingItem = state.itemList.find((item) => item.id === newItem.id)

        if(existingItem){
            existingItem.quantity ++;
            existingItem.totalPrice += newItem.price;
        }else{
            state.itemList.push({
            id : newItem.id,
            name : newItem.name,
            price : newItem.price,
            totalPrice : newItem.price,
            quantity : 1
        })
         state.totalQuantity ++;
        }
      },

      removeFromCart() {},

      setShowCart(state) {
        state.showCart = !state.showCart
      },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;