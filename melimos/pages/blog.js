import React from 'react'
import  {Navbar, BlogArticle, Footer } from '../components/navbar/navbar'
import { BlogLandContainer, CatergoryContainer, OtherContainer, TopContainer } from '../components/navbar/style.navbar'
import {IoIosArrowForward} from "react-icons/io"
import Badge from '../components/badge/badge'
import { category } from '../utils/ui-data'
import one from "../assets/blog/1.svg"
import two from "../assets/blog/2.svg"
import three from "../assets/blog/3.svg"
import four from "../assets/blog/4.svg"
import five from "../assets/blog/5.svg"
import { sideblog } from '../utils/ui-data'
import {AiOutlineSearch} from "react-icons/ai"
import slider from "../assets/image/slider.png"
import blogPic from '../assets/image/blogpic.svg'


import Image from 'next/image'
import { Avatar } from '@mui/material'
const Blog = () => {
  return (
    <>
      <Navbar/>
      <BlogLand/>
      <Catergory/>
      <TopStories/>
      <OtherStories/>
      <BlogArticle/>
      <Footer/>
    </>
  )
}

// status color
const claimStatus = {
  "error" : "error",
  "success": "success",
  "purple" : "purple",
  "blue": "blue",
  "yellow" : "yellow",
}

const BlogLand = () => {
  return (
    <BlogLandContainer>
      <div>
        {/* title */}
        <h1 className='text-center text-[46px] font-bold leading-[1.3] text-blacktext'>
          Let&apos;s carry you along on<br/>latest <span className='text-primary'>Tech Gists.</span>
        </h1>
        {/* description */}
        <p className='text-center text-kblackCom text-lg mt-6' >
          Be the first to catch on the latest trends in Designs, Programming and<br/>technologies to choose from.
        </p>

        {/* search form */}
        <div className='flex justify-center py-10'>
          <div className='relative  w-[430px] flex justify-center ' >
            <input type="text" className="bg-white appearance-none border border-kwhite rounded-[20px] pl-12 w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"  placeholder = "Search"/>
            <AiOutlineSearch className='absolute top-6  text-lg left-5 text-black3'/>
            <button className="absolute right-3 top-2 rounded-radius search text-xs text-white h-[47px] w-[80px] "  >Go</button>
          </div>
        </div>

        {/* slider */}
        {/* <div> */}
          {/* prev button */}
          {/* div */}
          {/* <div className=''> */}
            {/* <div className='flex items-center gap-6 mt-6'> */}
              {/* image */}
              {/* <div className='h-full w-[256px] rounded-blog bg-white'>
                <Image src={slider} alt="" ></Image>
              </div> */}
              {/* <div> */}
                {/* title */}
                {/* <h2>
                  How to choose the right technology as a new bie, in Programming.
                </h2> */}
                {/* description */}
                {/* <p className='text-base font-semibold text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui iaculis faucibus vulputate tempus, convallis et sed mollis mi. Donec consectetur auctor dapibus erat aliquet.
                </p> */}
                {/* content writer */}
                {/* <div className='flex items-center'>
                    <Avatar sx={{ width: 52.74, height: 52.74 }}>
                        <Image src={blogPic} alt="" width="" height="" ></Image>
                    </Avatar>

                    <div className='ml-6'>
                        <p className='text-kwhite text-xs font-semibold'>Opeoluwa Ogunmodede</p>
                        <p className='text-kwhite text-xs font-semibold'>Jan 8, 2022</p>
                    </div>
                </div> */}
              {/* </div> */}

            {/* </div> */}
          {/* </div> */}

          {/* next button */}
        {/* </div> */}
        
      </div>
    </BlogLandContainer>
  )
}

const  Catergory = () => {
  return (
    <CatergoryContainer>
        <div>
          <h2 className='text-center text-blacktext text-[26px] font-semibold mb-10'>Choose your preferred category</h2>
        </div>

        {/*  */}
        <div className='cat-wrapper flex flex-wrap gap-6 items-center justify-center w-[60%]'>
          {
            category.map((item, index) => {
              return (
                <>
                    <Badge
                      type={claimStatus[item.status]}
                      content = {item.name}
                    />
                </>
              )
            })
          }
          
        </div>
    </CatergoryContainer>
  )
}

const TopStories = () => {
  return (
    <TopContainer>
      <div className='flex items-center mb-14'>
        <h2 className='font-semibold text-[26px]'>More top stories</h2>
        <IoIosArrowForward size="24" className="mt-2 ml-3"/>
      </div>
      <div className="grid grid-cols-2 gap-10 w-full">
        {/* SUB BLOG */}
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className='col-span-2'>
            {/* image */}
            <div className=' rounded-blog bg-white w-full'>
              <Image src={one} alt="" layout='responsive'></Image>
            </div>
            {/* title */}
            <h3 className='text-2xl font-semibold mt-8 mb-6 text-black'>
              3G Networks Are Shutting Down: How This Affects Your Devices
            </h3>
            {/* description */}
            <p className='text-base text-black font-normal'>
              Carriers are closing down 3G networks in a final transition to 4G LTE and 5G. Some devices and services won&apos;t make the jump.
            </p>
            {/* content writer */}
            <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
          </div>
          <div className=' mt-6'>
            {/* headlines */}
            <div>
              {/* image */}
              <div className='h-full rounded-blog bg-white w-full relative '>
                <Image src={two} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
              </div>
              {/* title */}
              <h3 className='text-xl mt-8 font-semibold text-black'>
                3G Networks Are Shutting Down: How This Affects Your Devices
              </h3>
              {/* content writer */}
              <p className='text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
            </div>
          </div>
          <div className='mt-6'>
            {/* headlines */}
            <div>
              {/* image */}
              <div className='h-full rounded-blog w-full'>
                <Image src={three} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
              </div>
              {/* title */}
              <h3 className='text-xl mt-6 font-semibold text-black'>
                Amsterdam Apple Store Hostage Situation Ends in Arrest              
              </h3>
              {/* content writer */}
              <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
            </div>
          </div>
          <div className='mt-6'>
            {/* headlines */}
            <div>
              {/* image */}
              <div className='h-full rounded-blog bg-white w-full relative '>
                <Image src={four} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
              </div>
              {/* title */}
              <h3 className='text-xl mt-6 font-semibold text-black'>
                Hubble Spots Weird &apos;Space Triangle&apos; Full of Baby Stars              </h3>
              {/* content writer */}
              <p className='text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
            </div>
          </div>
          <div className='mt-6'>
            {/* headlines */}
            <div>
              {/* image */}
              <div className='h-full rounded-blog w-full'>
                <Image src={five} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
              </div>
              {/* title */}
              <h3 className='text-xl mt-6 font-semibold text-black'>
                Amsterdam Apple Store Hostage Situation Ends in Arrest              
              </h3>
              {/* content writer */}
              <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
            </div>
          </div>
        </div>

        <div className=''>
          {
            sideblog.map((item, index) => {
              return (
                <>
                  <div className='flex items-center gap-6 mb-4'>
                    {/* image */}
                    <div className='h-full w-[256px] rounded-blog bg-white'>
                      <Image src={item.image} alt="" ></Image>
                    </div>
                    <div>
                      {/* title */}
                      <h3 className='text-base font-semibold text-black'>
                        Ukrainian Banks, Government Sites Taken Down by Suspected Cyberattack            
                      </h3>
                      {/* content writer */}
                      <p className='text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
                    </div>
                  </div>
                </>
              )
            }) 
          }
          
        </div>
      </div>
    </TopContainer>
  )
}

const TopList = () => {
  return (
    <div>
    
    </div>
  )
}

const OtherStories = () => {
  return (
    <OtherContainer>
      <div className='flex items-center'>
        <h2 className='font-semibold text-3xl pb-10'>In case you missed it</h2>
        <IoIosArrowForward size="24" className="-mt-8 ml-3"/>
      </div>
      <div className="grid grid-cols-2 gap-14 w-full">
        <div className=''>
          {
            sideblog.map((item, index) => {
              return (
                <>
                  <div className='flex items-center gap-6 mt-6'>
                    {/* image */}
                    <div className='h-full w-[256px] rounded-blog bg-white'>
                      <Image src={item.image} alt="" ></Image>
                    </div>
                    <div>
                      {/* title */}
                      <h3 className='text-base font-semibold text-black'>
                        Ukrainian Banks, Government Sites Taken Down by Suspected Cyberattack            
                      </h3>
                      {/* content writer */}
                      <p className='text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
                    </div>
                  </div>
                </>
              )
            }) 
          }
        </div>
        <div className=' '>
          
          {/* SUB BLOG */}
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className='mt-6'>
              {/* headlines */}
              <div>
                {/* image */}
                <div className='h-full rounded-blog w-full'>
                  <Image src={three} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
                </div>
                {/* title */}
                <h3 className='text-xl mt-6 font-semibold text-black'>
                  Amsterdam Apple Store Hostage Situation Ends in Arrest              
                </h3>
                {/* content writer */}
                <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
              </div>
            </div>
            <div className=' mt-6'>
              {/* headlines */}
              <div>
                {/* image */}
                <div className='h-full rounded-blog bg-white w-full relative '>
                  <Image src={two} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
                </div>
                {/* title */}
                <h3 className='text-xl mt-6 font-semibold text-black'>
                  3G Networks Are Shutting Down: How This Affects Your Devices
                </h3>
                {/* content writer */}
                <p className='text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
              </div>
            </div>

            {/*  COLUMNS - SPAN -2 */}
            {/* headlines */}
            <div className='col-span-2 mt-6'>
              {/* image */}
              <div className=' rounded-blog bg-white w-full'>
                <Image src={one} alt="" layout='responsive'></Image>
              </div>
              {/* title */}
              <h3 className='text-2xl font-semibold my-6 text-black'>
                3G Networks Are Shutting Down: How This Affects Your Devices
              </h3>
              {/* description */}
              <p className='text-base text-black font-normal'>
                Carriers are closing down 3G networks in a final transition to 4G LTE and 5G. Some devices and services won&apos;t make the jump.
              </p>
              {/* content writer */}
              <p className=' text-xs mt-4 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
            </div>

            <div className='mt-6'>
            {/* headlines */}
              <div>
                {/* image */}
                <div className='h-full rounded-blog w-full'>
                  <Image src={four} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
                </div>
                {/* title */}
                <h3 className='text-xl mt-6 font-semibold text-black'>
                  Amsterdam Apple Store Hostage Situation Ends in Arrest              
                </h3>
                {/* content writer */}
                <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
              </div>
            </div>

            <div className='mt-6'>
            {/* headlines */}
              <div>
                {/* image */}
                <div className='h-full rounded-blog w-full'>
                  <Image src={five} alt=""   style={{width: "100%", height: "100vh"}} ></Image>
                </div>
                {/* title */}
                <h3 className='text-xl mt-6 font-semibold text-black'>
                  Amsterdam Apple Store Hostage Situation Ends in Arrest              
                </h3>
                {/* content writer */}
                <p className=' text-xs mt-2 text-[#8895A7] '>By Opeoluwa Ogunmodede</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </OtherContainer>
  )
}

export default Blog