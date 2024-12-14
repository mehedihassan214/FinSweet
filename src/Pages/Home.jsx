import React from 'react'
import Banner from '../Section/Banner'
import Work from '../Section/Work'
import Project from '../Section/Project'
import Features from '../Section/Features'
import Client from '../Section/Client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Question from '../Section/Question'
import Build from '../Components/subComponent/Build'
import Blog from '../Section/Blog'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Work/>
        <Project/>
        <Features/>
        <Client/>
        <Question/>
        <Build/>
        <Blog/>
     
    </div>
  )
}

export default Home
