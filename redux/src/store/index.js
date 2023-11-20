import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },

  reducers:{
    increment(state){
       state.counter ++
    },

    decrement(state){
       state.counter --
    },
    
    addByAmount(state, action){
      state.counter += action.payload
    },

    reset(state){
      state.counter = 0
    }
  }
})

export const {increment, decrement, addByAmount, reset} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
})
export default store