import React from 'react'
import Hero from '../../components/Hero/Hero'
import '../Home/Home.css'
import '../../styles/global.css'
import HomeServices from '../../components/HomeService/HomeServices'
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton'
import BookTable from '../../components/BookTable/BookTable'

const Home = () => {
  return (
    <div className="Home">
    <Hero />
    <HomeServices />
    <BookTable />
    <BackToTopButton />
    </div>
  )
}

export default Home