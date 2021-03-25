import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import NavBar from './NavBar'
import Products from './Products'
import './style.css'
import Trending from './Trending'

function Home() {
    return (
        <>
            <NavBar />
            <Carousel />
            <Products />
            <Trending/>
            <Footer />
        </>
    )
}

export default Home
