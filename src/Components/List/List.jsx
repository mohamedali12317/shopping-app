import React from 'react';
import './List.scss'
import Card from '../Card/Card';

const List = () => {
 const data = [
  {
   id : 1 ,
   img : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_6_6_c2dc294e-c81c-42bb-80fd-a361742663b3.jpg?v=1679883485&width=1100" , 
   img2 : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_6_7_b04dea21-e0db-4215-a467-bfe4b7f610c2.jpg?v=1679883485&width=1100" , 
   title : "Teddy Bear Coats",
   isNew : true ,
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
   oldPrice : "200",
   price : "180",
  } ,
  {
   id : 3 ,
   img : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_9_1_130a3637-a787-42be-83ac-05bcbf602ef4.jpg?v=1679883145" , 
   img2 : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_9_3.jpg?v=1679883145" , 
  //  img : "https://img.staticdj.com/e83344bc7f7a3a028001ce6c250442c9_1080x.jpeg" , 
  //  img2 : "https://img.staticdj.com/76aae936cc4e8cdca130ef423bdfde63_1080x.jpeg" , 
   title : "Vertical Textured Sweatshirt",
   isNew : true ,
   oldPrice : "70",
   price : "50",
  } ,
  {
   id : 4 ,
  //  img : "https://img.staticdj.com/f9c9247cd2b2e16f957309253bb4f15c_1080x.jpeg" , 
  //  img2 : "https://img.staticdj.com/66e4b2f91bc84c10a1b5aca68a200f06_1080x.jpeg" , 
   img : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_10_5_609e06ac-3a78-422d-b1a8-57018b4fe2e8.jpg?v=1679883135" , 
   img2 : "https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_10_7_713d59c4-cb3a-4861-a640-5c5acb133983.jpg?v=1679883135" , 
   title : "Zipped Polo Shirt with Pocket",
   isNew : true ,
   oldPrice : "80",
   price : "60",
  } ,
  

 ];

 return (
  <>
   <div className="list">
      {data?.map(item =>(
       <Card item={item} key={item.id}/>
      ))}
   </div>     {/* List */}
  </>
 );
}

export default List;
