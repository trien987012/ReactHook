//rfc
import React, { useCallback, useState } from 'react';
import Comment from './Comment';

const UseCallbackDemo = () => {
    const [like,setLike] = useState(1);
    const [number,setNumber] = useState(1);

    const renderLike = ()=>{
        return (
            <span> Ban da tha {like} <i className='fa fa-heart text-danger'></i>! </span>
        );
    };
    const callBackRenderLike = useCallback(renderLike,[like]);
    return (
        <div className='container'>
            <h3>{number}</h3>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number+1)
            }}></button>
            <div className='card w-25'>
                <img src='https://i.pravatar.cc?u=6' alt='...'/>
                <div className='card-body'>
                    <p>Like:{like}<i className='fa fa-heart text-danger'></i></p>
                    <button className='btn btn-danger' onClick={()=>{
                        setLike(like+1)}}>
                        <i className='fa fa-heart'></i>
                    </button>
                    <hr />
                </div>
                <Comment renderLike={callBackRenderLike}/>
            </div>
        </div>
    );
}

export default UseCallbackDemo;
