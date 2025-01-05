import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPastes = () => {
  const [title,setTitle]=useState("");
  const [content, setContent]=useState("");

  const pastes=useSelector((state)=>state.paste.pastes)
  const {id}=useParams();

  useEffect(()=>{
    if(id){
      const paste=pastes.find((paste)=>paste._id==id);
      setTitle(paste.title);
      setContent(paste.content);
    }
  },id)
  return (
    <div>
      <div>
      <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
        <input type="text" 
        placeholder="Enter the title" 
        value={title}
        disabled
        onChange={(e)=>setTitle(e.target.value)}
        style={{padding:"5px", borderRadius:"10px", minWidth:"400px"}}/>
{/* 
        <button onClick={handlePaste}>
          {pasteId?"Click to Update":"Click to Paste"}
        </button> */}
      </div>

      <div style={{marginTop:"20px"}}>
        <textarea placeholder='Enter the content Here' cols={70} rows={50}
        style={{padding:"10px", borderRadius:"10px"}}
        value={content}
        disabled
        onChange={(e)=>setContent(e.target.value)}
        >
        </textarea>
      </div>
    </div>
    </div>
  )
}

export default ViewPastes
