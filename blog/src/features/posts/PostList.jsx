import {useSelector } from 'react-redux'
import {AllPosts } from './postSlice'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'
import Reactions from './Reactions'

const PostList = () => {
    const posts = useSelector(AllPosts)
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
 
    return (
    <section>
      <h1>Posts</h1>

      <div> 
        {orderedPost?.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className='postCredit'>
              <PostAuthor userId = {post.userId}/>
              <TimeAgo timestamp={post.date}/>
            </p>
            <Reactions post={post}/>
          </article>
        ))}
      </div>

    </section>
  )
}

export default PostList
