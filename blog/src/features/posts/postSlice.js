import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState =  [
    {
      id:1, 
      title: "first blog", 
      content:"rem Ipsum is simply dummy text of the printing and types",
    
    },
    {
      id:2, 
      title: "second blog", 
      content:"rem Ipsum is simply dummy text of the printing and types",
   
    }
]

const blogSlice = createSlice({
    name: "posts",
    initialState,

    reducers: {
      postAdded: {
        reducer(state, action){
        state.push(action.payload)
      },
        prepare(title, content, userId){
          return {
            payload: {
            id: nanoid(),
            title,
            content,
            userId
           }
        }
      }
    },
    postDelete(state, action){
      state.posts = state.posts.filter(post => post.id !== action.payload.id);
    }

    // reactionAdded(state, action){
    //   const { postId, reaction } = action.payload
    //   const existingPost = state.find((post) => post.id === postId )

    //   if(existingPost){
    //     existingPost.reactions[reaction] ++;
    //   }
    // }
  }
})


export const AllPosts = (state) => state.posts

export const { postAdded, reactionAdded, postDelete } = blogSlice.actions

export default blogSlice.reducer