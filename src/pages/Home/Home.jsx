import React from 'react';
import './Home.scss';
import Slider from '../../Components/Slider/Slider';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Categories from '../../Components/categories/categories';
import Contact from '../../Components/Contact/Contact';
const Home = () => {
 return (
  <>
   <div className="home">
     <Slider/>
     <FeaturedProducts type="featured"/>
     <Categories/>
     <FeaturedProducts type="trending"/>
     <Contact/>
   </div> {/* home */}
  </>
 );
}

export default Home;
// {/*  */}