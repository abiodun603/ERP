import React from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { SIZES } from '../../assets/theme/theme'
import { DashCard } from '../../styles/dashboard.style'

/**======== DASHBOARD CARD COMPONENT ========== * */
const Card = ({user, number, dollar}) => {   // ? :
    return(
        <>
            <DashCard>
                {/* totoal user */}
                <div className='ava flex items-center'>
                    {/* circle image */}
                    <div className='circleAvatar flex items-center justify-center mr-3 font-medium'>
                        <BiCopyAlt className='text-[#556EE6]'/>
                    </div>   
                    {/* image */}
                    <h3>{user}</h3>  
                </div>

                {/* Number Count */}
                <div className='flex items-end grow mb-1.5'>
                    <div className='flex items-center'>
                         <h2 className='text-blackcom mr-1' style={{fontSize: SIZES.h3}}>
                            {
                                dollar ? `$ ${number}` : number
                            } 
                        </h2>
                        {/* arrow up */}
                        <MdKeyboardArrowUp  className='text-green text-base font-bold'/>
                    </div>
                </div>

                {/* percentage */}
                <div className='flex items-center'>
                    <p className='mr-2 text-green bg-ogreen rounded-sm'>+ 0.2 %</p>
                    <h3 className='text-ksecondary' style={{fontSize: SIZES.body5}}>From last month</h3>
                </div>
            </DashCard>
        </>
    )
}

/**======== DASHBOARD SUB-COMPONENT ========== * */
const Dash = () => {
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base'>INDIVIDUAL USERS</h2>
                <div className="w-50 md:w-1/8 mb-6 md:mb-0">
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal" style={{fontSize: SIZES.body5}}  id="grid-state">
                        <option>This Month</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='flex'>
                <Card user="Total Users" number="1,452"/>
                <Card user="Active Users" number="2,452"/>
                <Card user="Total Hospital Visits" dollar number="532,452"/>
                <Card user="Total Telemedicine" number="1,452"/>
            </div>

            {/*  Lastest Activites */}
            {/* <div className='w-full min-h-full bg-white rounded mt-9 pl-5 pt-3 '>
                <h3 className='text-base font-semibold mt-3 mb-4'>Lastest Activities</h3>
                <TabTable/>
            </div> */}
        </>
    )
}


const IndividualUser = () => {
  return (
    <>

        <Dash/>
    </>
  )
}



export default IndividualUser