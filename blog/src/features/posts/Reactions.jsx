import { useDispatch } from "react-redux"
import {reactionAdded} from './postSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const Reactions = ({ post }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {
         Object.entries(reactionEmoji).map(([name, emoji]) => {
            <button 
             type="button"
             key={name}
             onClick={dispatch(reactionAdded({postId: post.id, reaction: name}))}
             className="reactionButton"
            >
             {emoji} {post.reactions[name]}
            </button>
 } )}
    </div>
  )
}

export default Reactions
