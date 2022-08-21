//rfc
import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
let timeout = {};

export default function UseEffectDemo(props) {
    const [count,setCount] = useState(60)

    const [arrProduct, setArrProduct] = useState([
        {id:1, name:'product 1', price:1000, image:'https://i.pravatar.cc'}
    ]);

    const renderProduct =() =>{
        //goi api
        return arrProduct.map((prod, index)=>{
            return <div className='col-4' key={index}>
                <div className='card' style={{height:600}}>
                    <img src={prod.image} alt ='...'/>
                    <div className='card-body'>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}$</p>
                        <button className='btn btn-success'>Add to cart</button>
                    </div>
                </div>
            </div>
        })
    }

    const getApi = async () => {
        try{
            const result = await axios({
                url:'https://shop.cyberlearn.vn/api/Product',
                method:'GET'
            });
            // console.log(result.data.content);
            setArrProduct(result.data.content);

        }catch(err){
            console.log({err});
        }
    }

    useEffect( () => {
        //dependency (Tham so thu 2 la mang rong thi ham nay chay 1 lan duy nhat sau khi giao dien render lan dau tien)
        //Tuong duong componentDidMount
        getApi();
        // cai dat ham tu chay ngam 1 s setCount 1 lan
        timeout = setInterval(()=>{
            setCount((count)=>{
                return count -1;
            });
            console.log(123);
        },1000);
        return () =>{
            //Nhung lenh cai dat se chay khi component mat khoi giao dien (tuong duong componentWillUnmount)
            clearInterval(timeout);
        }
    }, []);
  return (
    <div className='container'>
        <h3>Count:{count}</h3>
        <hr />

        <h3>Shoes App</h3>
        <div className='row'>
            {renderProduct()}
        </div>
    </div>
  )
}
