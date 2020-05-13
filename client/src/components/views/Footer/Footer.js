import React from 'react'
import {Icon} from 'antd';
import './style.css';


function Footer() {
    return (
        <nav className="footer" >
            <div className="container">
         <div className="box">
         <a href="https://play.google.com/store/apps">
                 <p>Download Aplikasi Mobile Bcod-EStore</p>
                 
            </a>
             </div>

             <div className="box">
                 <p>Tim Pengembang</p>
                 <img src="assets/facebook.PNG" width="49" ></img>
                 
             </div>

             <div className="box">
                 <p>Lebih Dekat dengan Kami!!</p>
                 <img src="assets/facebook.PNG" width="49" ></img>
                 <img src="assets/Instagram_icon.PNG" width="49" ></img>
               

             </div>
             </div>
         </nav>
    )
}

export default Footer
