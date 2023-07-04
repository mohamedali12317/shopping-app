import React from 'react';
import './Footer.scss'

const Footer = () => {
 return (
  <>
   <div className="footer">
    <div className="top">
      <div className="item">
       <h1>Categories</h1>
      <span>Woman</span>
      <span>Men</span>
      <span>Shoes</span>
      <span>Accessories</span>
      <span>New Arrivals</span>
      </div> {/* item */}
      <div className="item">
       <h1>Links</h1>
       <span>FAQ</span>
       <span>Pages</span>
       <span>Stores</span>
       <span>Compare</span>
       <span>Cookies</span>
      </div> {/* item */}
      <div className="item">
       <h1>About</h1>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto unde, quo at sequi recusandae hic fugit illo ducimus accusantium vel. 
       </span>
      </div> {/* item */}
      <div className="item">
       <h1>Contact</h1>
       <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto unde, quo at sequi recusandae hic fugit illo ducimus accusantium vel.
       </span>
      </div> {/* item */}
    </div> {/* top */}

    <div className="bottom">
        <div className="left">
          <span className='logo'>lamstore</span>   {/* logo */}
          <span className='copyright'>
          © Copyright 2023 All rights reserved
          </span>   {/* copyright */}
        </div> {/* left */}

        <div className="right">
          {/* <img src="./img/payment.png" alt="" srcset="" /> */}
            <img src={process.env.PUBLIC_URL + "img/payment.png"} alt="" />

        </div>  {/* right */}
    </div>   {/* bottom */}


   </div> {/* footer */}
  </>
 );
}

export default Footer;
// {/*  */}
