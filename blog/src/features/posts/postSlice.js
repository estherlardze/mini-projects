import { createSlice } from "@reduxjs/toolkit";

const initialState =  [
    {id:1, title: "first blog", content:"rem Ipsum is simply dummy text of the printing and types"},
    {id:2, title: "second blog", content:"rem Ipsum is simply dummy text of the printing and types"}
]

const blogSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      postAdded(state, action){
        state.push(action.payload)
      }
    }

})


export const AllPosts = (state) => state.posts

export const { postAdded } = blogSlice.actions

export default blogSlice.reducer