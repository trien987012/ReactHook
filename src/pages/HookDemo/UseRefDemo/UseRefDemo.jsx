//rfc
import React, { useRef, useState } from 'react';
/*
useState lay gia tri input => khi co tinh nang chinh load lai form tren cung giao dien useRef su dung doi voi form khong bao gom chinh sua load lai
useRef: luu lai gia tri sau cac lan render.
 */
const UseRefDemo = () => {
    // const [userLogin, setUserLogin] = useState({
    //             username:'',
    //             password:'',
    // })
    const [number,setNumber] = useState(1);
    const userLoginRef = useRef({
        username:'',
        password:'',
    });
    console.log(userLoginRef);

    const handleChange = (e) =>{
        let {id,value} = e.target;
        userLoginRef.current[id] = value;
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value
        // })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(userLoginRef.current);
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <div className='form-group'>
                <p>username</p>
                <input className='form-control' id='username' onInput={handleChange}/>
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' id='password' onInput={handleChange}/>
            </div>
            <div className='form-group'>
                <button className='btn btn-success'type='submit'>LOGIN</button>
            </div>
        </form>
    );
}

export default UseRefDemo;
