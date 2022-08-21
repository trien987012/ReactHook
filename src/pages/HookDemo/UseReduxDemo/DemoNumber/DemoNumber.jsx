//rfc
import React, { Component } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

export default function DemoNumber(){
const number = useSelector((state) =>state.number);
const dispatch = useDispatch();
console.log(number);

return <div className='container'>
    <h3>Number: {number}</h3>
    <button className='btn btn-success' onClick={()=>{
        const action = {
            type:'CHANGE_NUMBER',
            payload: number + 1
        }
        dispatch(action);
    }}>+</button>
</div>
}
