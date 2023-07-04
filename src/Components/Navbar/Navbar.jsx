import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../CarT/Cart';
const Navbar = () => {
     const [open , setOpen] = useState(false);
 return (
  <>
   <div className="navbar">
   <div className="wrapper">
      <div className="left">

            <div className="item">
            <img src="/img/en.png" alt="" />
               <KeyboardArrowDownIcon/>
            </div>  {/* item  */}

            <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
            </div>  {/* item */}

            <div className="item">
            <Link className='link' to='products/1'>Women</Link>
            </div> {/* item */}

            <div className="item">
            <Link className='link' to='products/2'>Man</Link>
            </div> {/* item */}

            <div className="item">
            <Link className='link' to='products/3'>Children</Link>
            </div> {/* item */}
            
      </div>  {/* left */}

      <div className="center">
           <Link className='link' to='products/3'>LAMASTORE</Link>
      </div>  {/* center */}

      <div className="right">
          <div className="item">
          <Link className='link' to='products/3'>homePage</Link>
          </div>  {/* item */}

          <div className="item">
               <Link className='link' to='products/3'>About</Link>
          </div>  {/* item */}

          <div className="item">
               <Link className='link' to='products/3'>Contact</Link>
          </div>  {/* item */}

          <div className="item">
               <Link className='link' to='products/3'>Stores</Link>
          </div>  {/* item */}

          <div className="icons">
              <SearchIcon/>
              <PersonOutlineIcon/>
              <FavoriteBorderIcon/>

              <div className="cardIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
              </div>  {/*cardIcon*/}

          </div>  {/*icons*/}
      </div>  {/*right*/}
   </div>  {/* wrapper */}
   {open && <Cart/>}
   </div>  {/* navbar */}
   
  </>
 );
}

export default Navbar;
