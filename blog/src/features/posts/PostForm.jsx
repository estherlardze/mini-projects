import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectedUser } from '../users/UsersSlice'


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  
  const dispatch = useDispatch()

  const users = useSelector(selectedUser)


  const AuthorChange = users.map((user) => (
    <option value={user.id} key={user.id}>{user.name}</option>
  ))

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
        <select value={userId} onChange={handleAuthorChange}>
         <option value=""></option>
          {AuthorChange}
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
        style={{backgroundColor:"black", padding:"10px 30px", color:"white", borderRadius:"10px", border:"0px", cursor:"pointer"}}
       >
        Save
     </button>
      </form>
    
    </section>
   
  );
};

export default PostForm;
