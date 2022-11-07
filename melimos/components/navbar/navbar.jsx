import Image from 'next/image'
import React from 'react'
import { AboutContainer, BannerContainer, NavbarContainer, ServiceContainer, MissionContainer, ProjectContainer, AgileContainer, BlogContainer, FooterContainer, AchieveContainer } from './style.navbar'
import logo from "../../assets/icons/logo.svg"
import Button from '../button'
import { Avatar } from '@mui/material'
import { FiArrowRight } from 'react-icons/fi'
import bannerpic from "../../assets/image/bannerpic.svg"
import bannerImage from "../../assets/image/bannerImage.svg"
import one from "../../assets/image/1.svg"
import two from "../../assets/image/2.svg"
import three from "../../assets/image/3.svg"
import four from "../../assets/image/4.svg"
import app from "../../assets/icons/app.svg"
import swift from "../../assets/image/swift.svg"
import {FaGithub, FaGoogle, FaLinkedinIn, FaLongArrowAltRight, FaPlay, FaReddit, FaSlack, FaTwitter} from "react-icons/fa"
import {VscArrowLeft} from "react-icons/vsc"
import mission from "../../assets/image/mission.svg"
import blogPic from '../../assets/image/blogpic.svg'
import footerLogo from "../../assets/image/footerLogo.svg"
import { TextField } from '../FormComponent'
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from 'next/router'
import Badge from '../badge/badge'
// Earth Images
import navEarth from "../../assets/melimos/nav-earth.svg"

export const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <NavbarContainer>
        {/* right contaier */}
        <div className='n-left' onClick={() => router.push('/')}>
            <Image src={logo} alt="" height="" width= "120" className='nav__logo' />
        </div>

        {/* left container */}
        <div className='n-right '>
            <div className="n-list">
                <ul className=''>
                    <li className=''><a href='#'>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a href='#'>Solutions/Products</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
                <Button buttonSize="btn--small" onClick={() => router.push('/blog')}>Blog</Button>
            </div>
        </div>
      </NavbarContainer>
    </>
  )
}


export const Banner = () => {
    return (
      <BannerContainer>
        <image src={navEarth} alt="" className="nav-earth"/>

        {/* blue blue */}
        <div className="blue__nav--blur"></div>
        {/* red blue */}
        <div className="red__nav--blur"></div>

        <div className=" banner grid grid-cols-2 gap-2 w-full">
          <div className='pl-10 flex flex-col justify-center'>
              <h2 className='text-[46px] font-bold leading-[1.3] text-blacktext'>
                  We Build <span className='text-primary'>Software<br/>
                  Solutions</span> That<br/>
                  Lead & Inspire.
              </h2>

              <div className='flex items-center mt-4'>
                  <Avatar sx={{ width: 75, height: 75 }}>
                      <Image src={bannerpic} alt="" width="" height="" />
                  </Avatar>
                  <p className='ml-3 text-kblackCom w-[70%]'>
                      We blend insights and stategy 
                      to create digital products for 
                      forward-thinking organisations.
                  </p>
              </div>
              <div className='flex mt-10'>
                  <Button>Learn more</Button>
                  <div className='flex items-center'>
                      <div className='learn__circle rounded-full flex items-center justify-center ml-6'>
                          <FaPlay className='text-primary'/>
                      </div>
                      <p className=" text-kblackCom text-h3  ml-6">Learn more about us</p>
                  </div>
              </div>
          </div>
          <div className='relative bannerImagePosition'>
              <Image src={bannerImage} alt="" width = "" height = "" className=''/>
          </div>
        </div>
      </BannerContainer>
    )
}

export const About = () => {
    return (
      <AboutContainer>
        <div>
          <Badge type="btn-error" className/>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full h-full">
          <div className='flex flex-col justify-center '>
            {/* title */}
            <h3 className=' text-kred text-sm font-bold '>About Us</h3>
            <h2 className='text-[50px] leading-[1.2] text-blacktext font-bold  mt-6'><span className='-ml-1 bg-transparent'>O</span>ur Unique <br/>Value</h2>
            <p className='text-kblackCom text-justify font-medium text-[18px]  mt-6 w-[90%]'>
                We are a team focused on crafting products and solutions for people to work smarter, not harder.
            </p>
            <p className='text-kblackCom text-justify font-medium text-[18px] w-[90%]  '>
              Our beautifully designed products also help SMEs achieve accelerated productivity and
              growth with minimum investment.
            </p>
          </div>
          <div className='relative bannerImagePosition flex items-center'>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Avatar
                  sx={{ width: 219.38, height: 219.38 }}
                >
                  <Image src= {one} alt = "" />
                </Avatar>
              </div>
                <div>
                    <Avatar
                      sx={{ width: 219.38, height: 219.38 }}
                    >
                      <Image src= {two} alt = "" />
                    </Avatar>
                </div>
                <div>
                  <div className='w-[220px] h-[220px] rounded-full'>
                    <Image src= {three} alt = "" layout='fill' />
                  </div>
                </div>
                <div>
                  <Avatar
                    sx={{ width: 219.38, height: 219.38 }}
                  >
                    <Image src= {four} alt = "" />
                  </Avatar>
                </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    )
}

export const Service = () => {
    return (
      <ServiceContainer>
        {/* blue blue */}
        <div className="blue__nav--blur"></div>
        {/* red blue */}
        <div className="red__nav--blur"></div>
          {/* yellow blue */}
          <div className="yellow__nav--blur"></div>
          
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className='flex flex-col  mb-16'>
              {/* title */}
              <h3 className=' text-kred text-[18px] font-bold'>Services</h3>
              {/* subtitle */}
              <h2 className='text-[50px] leading-[1.2] text-blacktext font-bold  mt-6 '><span className='-ml-1 bg-transparent'>O</span>ur Value <br/>Proposition</h2>
            </div>
            <div className='flex flex-col   mb-16'>
              {/* icon image  */}
              <div className='w-[84px] h-[84px] flex items-center justify-center rounded-t-full rounded-br-full bg-primaryx'>
                <Image src= {app} alt = ""  className="  bg-transparent"/>
              </div>
              {/* title */}
              <h3 className = "text-[26px] font-semibold text-blacktext mt-3">Application Development</h3>
              {/* description */}
              <p className = "mt-4 text-kblackCom font-medium text-[18px] w-[80%]">
                We engineer digital solutions of any complexity, combining
                our multidisciplinary tech expertise with industry experience.
              </p>
              {/* learn more */}
              <div className="flex items-center mt-2 cursor-pointer">
                <p className="text-primary">Learn More</p>
                <FiArrowRight className="text-primary ml-1"/>
              </div>
            </div>
            <div className="">
              {/* icon image  */}
              <div className='w-[84px] h-[84px] flex items-center justify-center rounded-t-full rounded-br-full bg-primaryx'>
                <Image src= {app} alt = ""  className="  bg-transparent"/>
              </div>
              {/* title */}
              <h3 className = "text-[26px] font-semibold text-blacktext mt-3">Application Development</h3>
              {/* description */}
              <p className = "mt-4 text-kblackCom font-medium text-[18px] w-[80%]">
                We engineer digital solutions of any complexity, combining
                our multidisciplinary tech expertise with industry experience.
              </p>
              {/* learn more */}
              <div className="flex items-center mt-2 cursor-pointer">
                <p className="text-primary">Learn More</p>
                <FiArrowRight className="text-primary ml-1"/>
              </div>
            </div>
            <div className="">
              {/* icon image  */}
              <div className='w-[84px] h-[84px] flex items-center justify-center rounded-t-full rounded-br-full bg-primaryx'>
              <Image src= {app} alt = ""  className="  bg-transparent"/>
              </div>
              {/* title */}
              <h3 className = "text-[26px] font-semibold text-blacktext mt-3">Application Development</h3>
              {/* description */}
              <p className = "mt-4 text-kblackCom font-medium text-[18px] w-[80%]">
                We engineer digital solutions of any complexity, combining
                our multidisciplinary tech expertise with industry experience.
              </p>
              {/* learn more */}
              <div className="flex items-center mt-2 cursor-pointer">
                <p className="text-primary">Learn More</p>
                <FiArrowRight className="text-primary ml-1"/>
              </div>
            </div>
          </div>
        </div>
      </ServiceContainer>
    )
}

export const Mission = () => {
    return (
      <MissionContainer>

        {/* blue blur */}
        <div className="blue__nav--blur"></div>
        {/* green blur */}
        <div className="green__nav--blur"></div>
        {/* yellow blur */}
        <div className="yellow__nav--blur"></div>
          <div className="grid grid-cols-2 gap-8 w-full h-full">
            <div className='flex flex-col justify-center '>
              {/* title */}
              <h2 className='text-[50px] leading-[1.2] text-blacktext font-bold  mt-6 '>We are here to grow your business</h2>
              <p className='text-kblackCom font-medium  text-[18px]  mt-8 text-justify '>
                Melimos team of engineers/developers/designers are committed to developing products to meet user requirements through simple design, easy operation, moderate cost, maintenance, and upgrades to guarantee customer satisfaction.
              </p>
              <p className='text-kblackCom font-medium text-justify text-[18px] w-[90%]  mt-6'>
                An efficient software process has been designed to ensure functional and structural quality with future scale in mind.
              </p>
              <div className="mt-6">
                <Button>Read more</Button>
              </div>
            </div>
            <div className='relative bannerImagePosition flex items-center'>
              <Image src={mission} alt="" width = "" height = "" className=''/>
            </div>
          </div>
      </MissionContainer>
    )
}

export const Project = () => {
    return (
        <ProjectContainer>
            {/* title */}
            <h3 className=' text-kred text-center text-sm font-bold '>Projects</h3>
            {/* sub-title */}
            <h2 className='text-[50px] text-center leading-[1.2] text-blacktext font-bold  mt-3 '>We let our work speak for itself</h2>
            {/* description */}
            <div className="w-full flex justify-center">
                <p className='text-kblackCom text-center font-medium  text-[18px] w-[60%]  mt-6'>
                    To take a trival example, which of us ever understands labourious physical excercise,
                    except to obtain some advantage But who has any right.            
                </p>
            </div>

            {/* Projects */}
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className=" mt-10 row-start-1 rounded-[25px] row-end-4 h-[600px] w-[455px] bg-primary  ...">

                </div>
                {/* <div className="row-end-3 row-span-2 bg-black ...  ">02</div> */}
                {/* <div className="row-start-1  bg-black row-end-4 ...">03</div> */}
            </div>
           
        </ProjectContainer>
    )
}

export const Achieve = () => {
  return (
    <AchieveContainer>
      {/* title */}
      <h3 className=' text-kred text-center  text-sm font-bold '>Cold, Hard Data</h3>
      {/* sub-title */}
      <h2 className='text-[50px] leading-[1.2] text-center text-blacktext font-bold  mt-3 '>
        <span className='-ml-1 bg-transparent'>Our Achievments </span>            
      </h2>

      {/* achievement */}
      <div className="flex flex-row justify-center " style={{margin: "5rem auto"}}>
        <div className="flex justify-center items-center">
          <div className="track__grid w-full" >
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>45<span>+</span></h2>
                  {/* desc */}
                  <p>Clients<br/>Served</p>
                </div>
              </div>
            </div>
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>6</h2>
                  {/* desc */}
                  <p>Clients from<br/> Diffrent countries</p>
                </div>
              </div>
            </div>
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>0</h2>
                  {/* desc */}
                  <p>Deadlines<br/>Missed</p>
                </div>
              </div>
            </div>
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>40<span>+</span></h2>
                  {/* desc */}
                  <p>Products<br/>Shipped</p>
                </div>
              </div>
            </div>
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>12</h2>
                  {/* desc */}
                  <p>Finished<br/>Design Sprints</p>
                </div>
              </div>
            </div>
            <div className="w-full ease-out duration-500 hover:scale-105 flex">
              <div className='achievement__tile'>
                <div className='progressive--line rounded-full'>
                  <span className='rounded-full'></span>
                </div>
                <div className='achieve__frame ml-4'>
                  {/* numbers */}
                  <h2>0</h2>
                  {/* desc */}
                  <p>Office<br/>Upgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </AchieveContainer>
  )
}

export const Agile = () => {
    return (
        <AgileContainer>
            <div className="grid grid-cols-2 gap-8 w-full h-full">
                <div className='flex flex-col justify-center '>
                <div className='flex flex-col  mb-16'>
                        {/* title */}
                        <h3 className=' text-kred text-[18px] font-bold'>Our Ideals</h3>
                        {/* subtitle */}
                        <h2 className='text-[50px] leading-[1.2] text-blacktext font-bold  mt-6 '> 
                            What&apos;s<br/> 
                            important<br/>
                            to us
                        </h2>
                    </div>
                </div>
                <div className='relative bannerImagePosition flex flex-col justify-center'>
                    {/* title */}
                    <h3 className="text-3xl text-blacktext font-semi-bold mb-[35px] ">We work agile</h3>

                    {/* description */}
                    <p className="text-kblackCom font-medium text-lg text-justify">
                        We work agile, which means we release(part of) the fully functional products as soon as possible, instead of partial release from each discipline. Thus, the team works parallel instaed of one discipline after the other.
                    </p>
                    <p className="mt-6 text-kblackCom font-medium text-lg text-justify">
                        We can do this so we can offer velocity, flexibility and to get results as
                        soon as possible. So your product is up and running very soon in the project!                    
                    </p>
                    <div className='flex mt-10 '>
                        {/* prev arrow */}
                        <div className="w-[60px] flex items-center justify-center h-[40px] bg-primaryxx rounded-[20.5px]" >
                            <VscArrowLeft className='bg-transparent text-xl text-white'/>
                        </div>
                        {/* next arrow */}
                        <div className=" ml-4 w-[107px] h-[40px] flex items-center justify-center bg-primary rounded-[20.5px]" >
                            <FaLongArrowAltRight className='bg-transparent text-4xl text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </AgileContainer>
    )
}

export const BlogArticle = () => {
    return (
        <BlogContainer>
          {/* title */}
          <h3 className=' text-kred  text-sm font-bold '>Blog</h3>
          {/* sub-title */}
          <h2 className='text-[50px] leading-[1.2] text-blacktext font-bold  mt-3 '>
            <span className='-ml-1 bg-transparent'>O</span>ur last<br/>
            articles            
          </h2>
          {/*  */}
          <div className='mt-10'>
            <div className="grid grid-cols-3 gap-12 h-full place-items-center">
              <div className='flex bg-primary flex-col col-span-2 p-16  mb-16 h-[412px] rounded-[21.5278px]'>
                  <div className='flex flex-col flex-1'>
                      {/* title */}
                      <h3 className='text-kwhite text-[26px] font-bold'>
                          Identifying, understanding and designing
                          solutions for digital products
                      </h3>

                      {/* description */}
                      <p className='text-kwhite text-base mt-6'>
                          We engineer digital solutions of any complexity, combining our multidisciplinary tech expertise with indistry experience. Owing to the need for industries to adapt
                          and evolve to the ever changing landscape of...
                      </p>
                  </div>

                  {/* Previous and next article */}
                  <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                          <Avatar sx={{ width: 52.74, height: 52.74 }}>
                              <Image src={blogPic} alt="" width="" height="" />
                          </Avatar>

                          <div className='ml-6'>
                              <p className='text-kwhite text-sm font-semibold'>Opeoluwa Ogunmodede</p>
                              <p className='text-kwhite text-xs font-semibold'>Jan 8, 2022</p>
                          </div>
                      </div>
  
                      <div className='flex items-center'>
                          <Button buttonSize="btn--small" buttonStyle="btn--primary--outline">Previous Article</Button>
                          <span className='mr-3'></span>
                          <Button buttonSize="btn--small" buttonStyle="btn--white--outline">Next Article</Button>
                      </div>
                  </div>
              </div>
              <div className='flex p-16  flex-col h-[376.74px] w-[376.74px]   mb-16 rounded-[21.5278px] bg-kwhite'>
                {/* title */}
                <h2 className = "text-[35px] leading-[1.3] font-bold">Want to read more articles?</h2>
                <p className='text-kblackCom text-base mt-6 mb-6'>
                  Read more articles on<br/>
                  our blog
                </p>
                <Button>Visit our Blog!</Button>
              </div>
            </div>
          </div>
        </BlogContainer>
    )
}

export const Contact = () => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: "onChange",
  });
  return  (
    <>
      <ProjectContainer>

        {/* blue blur */}
        <div className="yellow__nav--blur"></div>
        {/* green blur */}
        <div className="red__nav--blur"></div>
        {/* blue blur */}
        <div className="blue__nav--blur"></div>
        {/* green blur */}
        <div className="green__nav--blur"></div>
        {/* yellow blur */}
        <div className="purple__nav--blur"></div>
        
        {/* title */}
        <h3 className=' text-kred text-center text-sm font-bold '>Contact Us</h3>
        {/* sub-title */}
        <h2 className='text-[50px] text-center leading-[1.2] text-blacktext font-bold  mt-3 '>Lets create something<br/>awesome together</h2>
        
        <div className='w-[100%]  py-20 bg-white rounded-[20px] shadow-contact mt-10 mb-20 px-20'>
          <div className="grid grid-cols-2  gap-16 place-items-start  w-full ">
            <div className='flex  blue-background flex-col  w-full  rounded-[21.5278px]'>
              <TextField
                label="Your Name"
                name="email"
                type="email"
                placeholder="Your Name"
                required={true}
                {...register("email", { required: true })}
                user 
              />  

              <TextField
                label="E-mail"
                name=""
                type="email"
                placeholder="Your email address"
                required={true}
                {...register("email", { required: true })}
                email 

              />    

              <TextField
                label="Phone"
                name="Enter your email address"
                type="tel"
                placeholder="Your number"
                required={true}
                {...register("email", { required: true })}
                phone

              />       
            </div>
            <div className='flex  flex-col rounded-[21.5278px]  w-full'>
              <TextField
                label="Message"
                name="Enter your email address"
                type="textarea"
                placeholder="Your number"
                required={true}
                {...register("email", { required: true })}
              />  
            </div>
          </div>
          <div className='flex justify-center mt-14'>
            <Button>Send Message</Button>
          </div>
        </div>
      </ProjectContainer>
    </>
  )
}



export const Footer =  () => {
    return (
      <FooterContainer>
        <div>
          <div className="grid grid-cols-4 mx-[10rem] gap-8 ">
              <div className=" ">
                <Image src = {footerLogo} alt=" " width={88}/>
                <p className='text-kwhite font-normal text-[14px] text-justify mt-4 pr-8'>
                  As technology continues to evolve, our commitment will remain the same, helping people do more, learn more and earn more in less time yet with better results.
                </p>
              </div>
              <div className=" flex flex-col text-kwhite font-semibold font-lg">
                  <h3>NAVIGATE</h3>
                  <ul>
                    <li>About Melimos</li>
                    <li>Our Code Of Conduct</li>
                    <li>Explore All Products</li>
                    <li>Reviews and Testimonials</li>
                    <li>Blog</li>
                  </ul>
              </div>                
              <div className=" flex flex-col text-kwhite font-semibold font-lg">
                  <h3>CONTACT</h3>

                  <ul>
                    <li>Product Enquiry</li>
                    <li>Customer Service</li>
                    <li>Locations</li>
                    <li>Careers</li>
                    <li>Enquiries and Sponsorship</li>
                  </ul>
              </div>
              <div className="">
                {/* title */}
                <h3>JOIN OUR COMMUNITY</h3>
                {/* description */}
                <p className='text-kwhite font-normal text-[14px] my-6 pr-8'>Subscribe to receive updates, access to exclusive deals, and more.</p>
                {/* input Field */}
                <input type="text" className="shadow bg-transparent appearance-none border border-kwhite rounded-[10px] w-full py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"  placeholder = "Enter your email address"/>
                {/* button */}
                <button className="bg-primary hover:bg-blue-700 text-white font-medium py-2  px-8 mt-6 rounded focus:outline-none focus:shadow-outline">Subscribe</button>
              </div>
          </div>

          <div className='footer--icons flex justify-center' >
            <FaTwitter className='icons text-kwhite' />
            <FaGithub className='icons'/>
            <FaGoogle className='icons'/>
            <FaReddit className='icons'/>
            <FaLinkedinIn className='icons'/>
            <FaSlack className='icons'/>
          </div>

          <p className="text-center text-kwhite opacity-70">&copy; 2022 Melimos - All Rights Reserved</p>
        </div>
      </FooterContainer>
    )
}