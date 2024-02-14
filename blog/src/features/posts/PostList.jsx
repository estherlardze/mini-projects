import {useSelector } from 'react-redux'
import {AllPosts } from './postSlice'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import Reactions from './Reactions'
import { useDispatch } from 'react-redux'
import { postDelete } from './postSlice'

const PostList = () => {
    const posts = useSelector(AllPosts)
    const dispatch = useDispatch()
    // console.log(posts)


    const deletePost = () => {
      dispatch(deletePost)
    }
    
    return (
    <section>
      <h1>Posts</h1>

      <div> 
        {posts?.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
            <PostAuthor userId={post.userId}/>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}

export default PostList
