import React, {useState} from 'react';
import "./styles.css";

export default function StyledButton2({ fs, setFile }) {
  const [buttonContext, setBUttonContext] = useState({
    content:"CCL Ekle",
    isAdded: false
  })
  
  const handleUploadFile = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile({
      path:e.target.files[0].path
    })
    setBUttonContext({
      content:"CCL Başarıyla Eklendi",
      isAdded: true
    })
  }
  return (
    <div className="input-div">
        <svg xmlns="http://www.w3.org/2000/svg" style={{width:"50" ,height:"50", fill:"currentColor", color:"white"}} className="bi bi-upload" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="white"></path> <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" fill="white"></path> </svg>
        <input type="file" name="file" id="file" className="inputfile" onChange={handleUploadFile}/> 
        <label htmlFor="file" className='fileLabel'>{buttonContext.content}</label>
    </div>
  )
}
