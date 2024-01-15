import React from 'react'; 
import Hero from '../../components/Hero/Hero';
import '../Home/Home.css';
import '../../styles/global.css';
import HomeServices from '../../components/HomeService/HomeServices';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import BookTable from '../../components/BookTable/BookTable';
import MasterChief from '../../components/MasterChief/MasterChief';
import AboutUs from '../../components/AboutUs/AboutUs';


const Home = () => {
  

  return (
        <>
    <div className="Home"> {}
      
        <Hero />
        <HomeServices />
        <AboutUs />
        <BookTable />
        <MasterChief />
        <BackToTopButton />
    
    </div>
        </>
  );
};

export default Home;
