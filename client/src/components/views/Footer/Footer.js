import React from 'react'
import {Icon} from 'antd';
import './style.css';


function Footer() {
    return (
        <nav className="footer" >
            <div className="container">
         <div className="box">
        <p>Download Aplikasi Mobile Bcod-EStore</p>
         
             </div>

             <div className="box">
                 <p>Tim Pengembang</p>
                 <div className="menu_1">
        <a href="/"><img style={{ width: '80px', height:'auto' }} src={require('../../promoimg/logow.png')} alt="Logo"/></a>
      </div>
                 
             </div>

             <div className="box">
                 <p>Lebih Dekat dengan Kami!!</p>
                 <div className="menu_2">
       
      </div>
  

             </div>
             </div>
         </nav>
    )
}

export default Footer
