import React from 'react'
import { About, Achieve, Agile, Banner, BlogArticle, Contact, Footer, Mission, Navbar, Project, Service } from '../components/navbar/navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <About/>
      <Service/>
      <Mission/>
      <Project/>
      <Achieve/>
      <Agile/>
      <BlogArticle/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage