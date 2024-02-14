import { selectedUsers } from '../users/UsersSlice'
import {useSelector } from 'react-redux'


const PostAuthor = ({ userId }) => {

    const users = useSelector(selectedUsers)
   // console.log('users', users)
    const author = users.find((user) => user.id === userId)

   console.log(author)

   return <span> By: {author ? author.name : "Unknown Author"}</span>
 
  
}

export default PostAuthor
