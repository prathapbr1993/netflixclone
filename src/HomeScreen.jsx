import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Navbar from './Navbar'


function HomeScreen() {
    return  (
        <div className='homeScreen'>

            <Navbar />

            <Banner />

        </div>
    )
}

export default HomeScreen
