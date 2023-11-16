import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postSlice';


const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const onButtonClick = () => {
    if(title && content){
    dispatch(
        postAdded({
            id:nanoid(),
            title,
            content
        })
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
          name='postTitle'
          value={title}
          onChange={handleTitleChange}
        />
        </div>
     
      <br />
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
