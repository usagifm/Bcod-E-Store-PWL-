import React from 'react'
import {Icon} from 'antd';
import './style.css';


function Footer() {
    return (
        <nav className="footer" >
            <div className="container">
         <div className="box">
        <p>Download Aplikasi Mobile Bcod-EStore</p>
         <div className="menu_1">
        <a href="https://play.google.com/store/apps">
            <img style={{ width: '100px', height:'auto' }} src={require('../../promoimg/google.png')} alt="Logo"/></a>
      </div>
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
        <a href="https://www.instagram.com"><img style={{ width: '44px', height:'auto' }} src={require('../../promoimg/Instagram_icon.png')} alt="Logo"/></a>
        <a href="https://web.facebook.com/"><img style={{ width: '50px', height:'auto' }} src={require('../../promoimg/facebook.png')} alt="Logo"/></a>
        <a href="https://twitter.com/home"><img style={{ width: '43px', height:'auto' }} src={require('../../promoimg/twitt.png')} alt="Logo"/></a>
      </div>
  

             </div>
             </div>
         </nav>
    )
}

export default Footer
