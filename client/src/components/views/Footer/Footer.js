import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
<<<<<<< Updated upstream
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Happy Coding  <Icon type="smile" /></p>
        </div>
=======
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
                 <p>Lebih Dekat dengan Kami </p>
                 <div className="menu_2">
        <a href="https://www.instagram.com"><img style={{ width: '30px', height:'auto' }} src={require('../../promoimg/Instagram_icon.png')} alt="Logo"/></a>
        <a href="https://web.facebook.com/"><img style={{ width: '30px', height:'auto' }} src={require('../../promoimg/facebook.png')} alt="Logo"/></a>
        <a href="https://twitter.com/home"><img style={{ width: '30px', height:'auto' }} src={require('../../promoimg/twitt.png')} alt="Logo"/></a>
      </div>
  

             </div>
             </div>
         </nav>
>>>>>>> Stashed changes
    )
}

export default Footer
