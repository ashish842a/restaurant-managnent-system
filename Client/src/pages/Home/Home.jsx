import React, { useState, useEffect } from 'react'; // Import useEffect together
import Hero from '../../components/Hero/Hero';
import '../Home/Home.css';
import '../../styles/global.css';
import HomeServices from '../../components/HomeService/HomeServices';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import BookTable from '../../components/BookTable/BookTable';
import MasterChief from '../../components/MasterChief/MasterChief';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially set to loading

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 600); 
  }, []);

  return (
    <div className="Home"> {}
      {isLoading ? <Loader /> : (
        <>
        <Hero />
        <HomeServices />
        <BookTable />
        <MasterChief />
        <BackToTopButton />
        </>
      )}
    </div>
  );
};

export default Home;
