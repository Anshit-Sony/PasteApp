import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../features/pasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
const Pastes = () => {
  const pastes=useSelector((state)=>state.paste.pastes);
  const dispatch=useDispatch();
  const [searchTerm, setSearchTerm]=useState('')
  const filteredData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId))
  }

  return (
    <div>
      <input type="search" placeholder='Enter to Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} 
      style={{padding:'5px', width:"500px"}}
      />
      <div style={{display:"flex", flexDirection:"column", gap:"20px", marginTop:"20px"}}>
        {
          filteredData.map((paste)=>{
            return (
              <div style={{border:"1px solid black", display:"flex", flexDirection:"column", gap:"5px"}}>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                  <button>
                    <NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink>
                  </button>
                  <button>
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied Successfully")
                    }}>Copy</button>
                  <button
                   onClick={()=>{
                    navigator.clipboard.writeText(`${window.location.href}/${paste?._id}`);
                    toast.success("Path copied to share")
                   }}
                  >Share</button>
                </div>
                <div>Created At: {paste.CreatedDate}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pastes
