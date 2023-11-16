import {useSelector } from 'react-redux'
import {AllPosts } from './postSlice'


const PostList = () => {
    const posts = useSelector(AllPosts)
    console.log(posts)
 
    return (
    <section>
      <h1>Posts</h1>

      <div>
        {posts?.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        ))}
      </div>

    </section>
  )
}

export default PostList
