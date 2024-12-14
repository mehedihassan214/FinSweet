import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router'
import About from '../Pages/About'
import Header from '../Section/Header'
import Footer from '../Section/Footer'

const RootLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default RootLayout