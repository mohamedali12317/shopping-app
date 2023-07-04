import React, { useState } from 'react';
import './Products.scss';
import List from '../../Components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  const catId = parseInt(useParams().id);

  const [maxPrice , setMaxPrice] = useState (1000);

  const [sort , setSort] = useState (null);
  
  console.log(catId);

 return (
  <>
   <div className="products">
   <div className="left">
     <div className="filterItem">
       <h2>product categories</h2>

      <div className="inputItem">
        <input type="checkbox" name="" id="1" value={1} />
        <label htmlFor="1">Shoes</label>
      </div>   {/* inputItem */}

      <div className="inputItem">
        <input type="checkbox" name="" id="2" value={2} />
        <label htmlFor="2">Skirts</label>
      </div>   {/* inputItem */}

      <div className="inputItem">
        <input type="checkbox" name="" id="3" value={3} />
        <label htmlFor="3">Coats</label>
      </div>   {/* inputItem */}

     </div>    {/* filterItem */}

     <div className="filterItem">
       <h2>Filter by price</h2>
       <div className="inputItem">
        <span>0</span>
        <input type="range" min={0}  max={1000} onChange={(e) => setMaxPrice(e.target.value) } />   {/* onChange دى الى خالتنى اقدر اختار اى رقم عكس لو انا مش حاططها وفضلت احرك شمال لمين فيها هتفضل بقاء 1000 */}
        <span>{maxPrice}</span>
      </div>   {/* inputItem */}

    </div>    {/* filterItem */}

    <div className="filterItem">
     <h2>Sort by</h2>
     <div className="inputItem">
        <input
          type="radio"
          id="asc"
          value="asc"
          name="price"
          onChange={(e) => setSort("asc")}
        />
        <label htmlFor="asc">Price (Lowest first)</label>
      </div>  {/* inputItem */}

     <div className="inputItem">
        <input
          type="radio"
          id="desc"
          value="desc"
          name="price"
          onChange={(e) => setSort("desc")}
        />
        <label htmlFor="desc">Price (Highest first)</label>
      </div> {/* inputItem */}

   </div>    {/* filterItem */}

   </div>    {/* left */}

      <div className="right">
        <img  className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>    {/* right */}
   </div>
  </>
 );
}

export default Products;
