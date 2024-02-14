import { createSlice } from "@reduxjs/toolkit"

const initialState = 
[
{id:1, name:"Esther Lardze"},
{id:2, name:"John Doe"},
{id:3, name:"Robert Hayman"}
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    }
})

export const selectedUsers = (state) => state.users

export default usersSlice.reducer