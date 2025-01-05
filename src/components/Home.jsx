import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../features/pasteSlice';

const Home = () => {
  const [title,setTitle]=useState("");
  const [content, setContent]=useState("");
  const [searchParams,setSearchParam]=useSearchParams();
  const pasteId=searchParams.get("pasteId");
  const dispatch=useDispatch();

  const pastes=useSelector((state)=>state.paste.pastes)

  useEffect(()=>{
    if(pasteId){
      const paste=pastes.find((paste)=>paste._id==pasteId);
      setTitle(paste.title);
      setContent(paste.content);
    }
  },pasteId)

  function handlePaste(){
    const paste={
      title:title,
      content:content,
      _id:pasteId || Date.now().toString(32),
      CreatedDate:new Date().toISOString(),
    }

    if(pasteId){
      dispatch(updateToPastes(paste));
    }
    else{
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setContent("");
    setSearchParam({});
  }
  return (
    <div>
      <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
        <input type="text" 
        placeholder="Enter the title" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{padding:"5px", borderRadius:"10px", minWidth:"400px"}}/>

        <button onClick={handlePaste}>
          {pasteId?"Click to Update":"Click to Paste"}
        </button>
      </div>

      <div style={{marginTop:"20px"}}>
        <textarea placeholder='Enter the content Here' cols={70} rows={50}
        style={{padding:"10px", borderRadius:"10px"}}
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        >
        </textarea>
      </div>
    </div>
  )
}

export default Home
