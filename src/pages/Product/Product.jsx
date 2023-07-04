import React from 'react';
import './Product.scss';
import { useState } from 'react';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

 const [selectedImg, setSelectedImg] = useState(0);
 const [quantity, setQuantity] = useState(1);

 const images = [
  "https://cdn.shopify.com/s/files/1/0036/7306/3491/products/4_dcef33e6-b45c-4465-a6cc-9137ddadc91a_1800x1800.jpg?v=1561437914" , 
   "https://cdn.shopify.com/s/files/1/0036/7306/3491/products/1_761993f7-4c94-4c0c-9982-380474442645_1800x1800.jpg?v=1561437914" , 
 ]

 return (
  <div>
   <>
   <div className="product">
    <div className="left">

      <div className="images">
       <img src={images[0]} alt="" onClick={e=> setSelectedImg(0)} />
       <img src={images[1]} alt="" onClick={e=> setSelectedImg(1)} />
      </div>    {/* images */}

      <div className="mainImage">
       <img src={images[selectedImg]} alt="" />
      </div>    {/* mainImage */}      

    </div>    {/* left */}

    <div className="right">
      <h1>Title</h1>
      <span className='price'>$200</span>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatem nesciunt eum enim aperiam, deleniti sit. Doloremque, debitis architecto, sed nostrum sunt consequuntur perspiciatis deleniti quam rerum distinctio, dolor eum.</p>
      <div className="quantity">
        <button onClick={() =>setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
        {quantity}
        <button onClick={() =>setQuantity(prev => prev+1)}>+</button>
      </div>     {/* quantity */}

      <button className="add">
        <AddShoppingCartIcon/> Add to cart
      </button>  {/* add */}

      <div className="links">
        <div className="item"> <FavoriteBorderIcon /> ADD TO WISH LIST</div>
        <div className="item"><BalanceIcon /> ADD TO COMPARE</div>
      </div>     {/* link */}

      <div className="info">
        <span>Vendor: Polo</span>
        <span>Product Type: T-Shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </div>     {/* info */}
            
      <hr />
            
      <div className="info">
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
      </div>    {/* info */}

    </div>     {/* right */}

   </div>
   </>
  </div>
 );
}

export default Product;
