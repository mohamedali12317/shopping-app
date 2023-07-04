import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
 const data = [
  {
   id : 1 ,
   img : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_6_6_c2dc294e-c81c-42bb-80fd-a361742663b3.jpg?v=1679883485&width=1100" , 
   img2 : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_6_7_b04dea21-e0db-4215-a467-bfe4b7f610c2.jpg?v=1679883485&width=1100" , 
   title : "Teddy Bear Coats",
   isNew : true ,
   desc : 'Teddy Bear Coats' ,
   oldPrice : "190 ",
   price : "170",
  } ,
  {
   id : 2 ,
  //  img : "https://img.staticdj.com/5ff74a4a93e4197cfdec6f335face31c_1080x.jpeg" , 
   img : "https://cdn.shopify.com/s/files/1/0036/7306/3491/products/4_dcef33e6-b45c-4465-a6cc-9137ddadc91a_1800x1800.jpg?v=1561437914" , 
   img2 : "https://cdn.shopify.com/s/files/1/0036/7306/3491/products/1_761993f7-4c94-4c0c-9982-380474442645_1800x1800.jpg?v=1561437914" , 
  //  img2 : "https://img.staticdj.com/a194c7e43599e83c3746a19658699dd4_1080x.jpeg" , 
   title : "Featured Products",
   isNew : true ,
   desc : 'Featured Products' ,
   oldPrice : "200",
   price : "180",
  } ,
 ] ;
 return (
  <>
   <div className="cart">
   <h1>Products in your cart</h1>
   {data?.map ((item) => (
    <div className="item" key={item.id}>
      <img src={item.img} alt="" />
      <div className="detalis">
        <h1>{item.title}</h1>
        <p>{ item.desc?.substring (0 , 100) }</p>  {/* i put ? it عشان لو مفيش وصف ميعملش مشكلة */}

        <div className="price">
        1 x ${item.price}
      </div>  {/* price */}

      </div>  {/* detalis */}
    
      <DeleteOutlinedIcon className="delete"/>

    </div> // item
   ))

   }  {/* data */}

       <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        {/* <span>${totalPrice()}</span> */}
      </div>  {/* total */}

      {/* <button onClick={handlePayment}>PROCEED TO CHECKOUT</button> */}
      {/* <span className="reset" onClick={() => dispatch(resetCart())}> */}
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>

   </div>   {/* cart */}
  </>
 );
}

export default Cart;
