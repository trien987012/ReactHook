//rfc
import React,{useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo() {
  /*
  useState la ham cua react cung cap.
  Luu y: khong goi ham nay trong if else hay switch ...
  [giaTriThayDoi,hamSetLaGiaTriMoi] = useState(gia tri mac dinh ban dau);
  this.state = {
    like:1
  }
   */
  const [like,setLike] = useState(1);
  return (
    <div className='container'>
      <div className='card w-25'>
        <img src='https://i.pravatar.cc?u=1' alt='av'/>
        <div className='card-body'>
          <h3>Ho ten: Do Khai</h3>
          <p>Tuoi: 18</p>
          <p>Like: {like}</p>
          <button className='btn btn-danger' onClick={()=>{
            setLike(like+1)
          }}>Like</button>
        </div>
      </div>
      <hr />
      <BaiTapChonXe />
    </div>
  )
}
