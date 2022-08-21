//rfc
import React from 'react'
import { memo } from 'react';
function Comment(props){
console.log("comment");
  return (
    <div className='container mt-2'>
        {props.renderLike()}
      <textarea className='form-control w-50'></textarea><hr />
      <button className='btn btn-primary'>Gui</button>
    </div>
  )
}
export default memo(Comment);