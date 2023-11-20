import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState =  [
    {
      id:1, 
      title: "first blog", 
      content:"rem Ipsum is simply dummy text of the printing and types",
      date: sub(new Date(), {minutes: 10}).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
    },
    {
      id:2, 
      title: "second blog", 
      content:"rem Ipsum is simply dummy text of the printing and types",
      date: sub(new Date(), {minutes: 5}).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
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
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
          }
           }
        }
      }
    },

    reactionAdded(state, action){
      const { postId, reaction } = action.payload
      const existingPost = state.find((post) => post.id === postId )

      if(existingPost){
        existingPost.reactions[reaction] ++;
      }
    }
  }
})


export const AllPosts = (state) => state.posts

export const { postAdded, reactionAdded } = blogSlice.actions

export default blogSlice.reducer