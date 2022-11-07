import React, { useState } from 'react'
import First from '../components/MutliStep/First';
import Five from '../components/MutliStep/Five';
import Fourth from '../components/MutliStep/Fourth';
import Second from '../components/MutliStep/Second';
import Six from '../components/MutliStep/Six';
import Third from '../components/MutliStep/Third';

const Form = () => {
  const [page, setPage] = useState(0)

  const FormTitle = [" ", "Diversity and Inclusion","Getting to Know You", "TECHNICAL SUITABILITY", "TEAMING SUITABILITY", "GOVERNMENT SUITABILITY"]

  const PageDisplay = () => {
    if(page === 0){
      return <First/>
    }else if(page === 1){
      return <Second/>
    }else if(page === 2){
      return <Third/>
    }else if(page === 3){
      return  <Fourth/>
    }else if(page === 4){
      return <Five/>
    }else if(page === 5){
      return <Six/>
    }
  }

  return (
    <div className='max-w-4xl px-3  md:mx-auto  '>
      {/* header section */}
      <div className='w-full flex flex-col items-center my-8 '>
        {/* black box */}
        <div className= 'w-full md:w-[400px] h-[150px] bg-black'>

        </div>  
        <h1 className='mt-8 font-bold'>Welcome to PARS</h1>
        <h1 className='font-bold text-center'>Performace Assessment Rating System (PARS)</h1>
        <h1 className='font-bold'>LEVEL - I</h1>
      </div>

      <div className='w-full'>
        {PageDisplay()}
      </div>

      {/* Next and Pre Button */}
      <div className='my-10 w-full flex justify-center space-x-1'>
        {/* pre */}
        <button 
          type='button' 
          className='w-[90px] h-[50px] bg-gray-200'
          disabled = {page === 0}
          onClick = {() => {
            setPage((currPage) => currPage - 1)
          }}
        >
          Prev
        </button>
        {/* next */}
        <button 
          type='button' 
          className='w-[90px] h-[50px] bg-white border'
          disabled = {page === FormTitle.length - 1}
          onClick = {() => {
            setPage((currPage) => currPage + 1) 
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Form