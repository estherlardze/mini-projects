import { selectedUser } from '../users/UsersSlice'
import {useSelector } from 'react-redux'


const PostAuthor = ({userId}) => {

    const users = useSelector(selectedUser)
    const author = users.find((user) => user.id === userId)

    //console.log(author)

   return <span> By: {" "} {author ? author.name : "Unknown Author"}</span>
 
  
}

export default PostAuthor
