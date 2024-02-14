import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectedUsers } from '../users/UsersSlice'


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  //console.log('userid', userId)
  
  const dispatch = useDispatch()

  const users = useSelector(selectedUsers)
 // console.log(users)


  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAuthorChange = (e) => setUserId(e.target.value);


  const onButtonClick = () => {
    if(title && content){
    dispatch(
        postAdded(title, content, userId)
    )
    setTitle("")
    setContent("")
}};

const userOptions  =  users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
 
  const save = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section className='form'>
      <h2>Create a New Post</h2>
      <form>
        <div style={{display:"flex", alignItems:"start", gap:"10px", marginTop:"20px"}}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name='title'
          value={title}
          onChange={handleTitleChange}
        />
        </div>
        
        <div style={{display:"flex", alignItems:"start", gap:"10px", marginTop:"20px"}}>
          <label htmlFor="author">Author:</label>
          <select id="author" value={userId} onChange={handleAuthorChange}>
            
            <option value=""></option>
            {userOptions}
          </select>
        </div>

      <div style={{display:"flex", alignItems:"start", gap:"10px"}}>
       <label htmlFor="content">Content:</label>
        <textarea
         id="content"
         value={content}
         onChange={handleContentChange}
        ></textarea>
      <br />
      </div>
      <button 
          type='button'
          onClick={onButtonClick}
          disabled={!save}
          style={{backgroundColor:"white", padding:"10px 30px", color:"black", borderRadius:"10px", border:"0px", cursor:"pointer"}}
        >
          Save
      </button>
      
      </form>
    
    </section>
   
  );
};

export default PostForm;
