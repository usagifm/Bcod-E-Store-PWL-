import React from 'react'
import {Icon} from 'antd';
import './style.css';

function Footer() {
    return (
        <nav className="footer" >
         <div className="box">
         <a href="https://play.google.com/store/apps">
                 <p>Download Aplikasi Mobile Bcod-EStore</p>
                 
            </a>
             </div>
             
             <div className="box">
             <a href="">
                 <p>Tim Pengembang : BcodEv</p>
                 </a>
             </div>

             <div className="box">
             <a href="">
                 <p>Tata cara Pembelian\n hehe</p>
                 </a>
             </div>
         </nav>
    )
}

export default Footer
