import React, {useState} from 'react'
import { BiCopyAlt, BiSearchAlt } from 'react-icons/bi'
import { MdDateRange, MdKeyboardArrowUp } from 'react-icons/md'
import { SIZES } from '../../assets/theme/theme'
import { DashCard } from '../../styles/dashboard.style'
import { HiOutlineLocationMarker} from "react-icons/hi"
import Table from '../../components/shared/table/table'
import Badge from '../../components/shared/badge/badge'
import { Tooltip } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '../../components/shared/button'


/** Fake Table Api **/
const claimsTable = {
    head: [
        "Claim No",
        "Date Incurred",
        "Provider",
        "Out/In Station",
        "Status",
        "Action"
    ],

    body: [
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Pending"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Declined"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        },
        {
            claim: "23804720",
            date: "12/11/2021",
            provider: "Abu Teaching Hosiptal",
            solution: "OPD",
            status: "Posted"
        }
    ]
}
// index below should be change to id
const renderHead = (item, index) => <th key = {index}>{item}</th>
const renderbody = (item, index) => (
    <tr key = {index} className = "">
        <td className = "">{item.claim}</td>
        <td className = "">{item.date}</td>
        <td className = "">{item.provider}</td>
        <td className = "">{item.solution}</td>
        <td className = "">
            <span className='cursor-pointer'>
                <Badge
                    type = {claimStatus[item.status]}
                    content = {item.status}
                />
            </span>
        </td>
        <td>
            <div className='flex items-center '>
                <Button buttonSize="btn--table" onClick={() => router.push('/about')}>View Details</Button>
                <Tooltip title="Report claim">
                    <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded'>
                        <MoreVertIcon  style={{fontSize: 17}}/>
                    </span>
                </Tooltip>
            </div>
        </td>
    </tr>
)
 // status color
 const claimStatus = {
    "Declined" : "danger",
    "Posted": "success",
    "Pending" : "pending"
}

/**======== HEALTHPROVIDER CARD COMPONENT ========== * */
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
                    {/* title */}
                    <h3 className='font-medium title text-sm'>
                        {user}
                    </h3>  
                </div>

                {/* Number Count */}
                <div className='flex items-end grow mb-2'>
                    <div className='flex items-center'>
                         <h2 className='text-blackcom mr-1' style={{fontSize: SIZES.h3}}>
                            {
                                dollar ? `$ ${number}` : number
                            } 
                        </h2>
                        {/* arrow up */}
                        <MdKeyboardArrowUp  className='text-green text-2xl font-bold'/>
                    </div>
                </div>

                {/* percentage */}
                <div className='flex items-center'>
                    <p className='mr-2 text-green text-xs bg-ogreen rounded-sm'>+ 0.2 %</p>
                    <h3 className='text-ksecondary' style={{fontSize: SIZES.body5}}>From last month</h3>
                </div>
            </DashCard>
        </>
    )
}

/**======== HEALTHPROVIDER FILTER COMPONENT ========== * */
const Filter = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="flex flex-row w-full mt-8 mb-6">
                <div className="basis-1/2  h-14 rounded-l">
                    <div className=' h-full w-full relative rounded-l'>
                        <input type="text" placeholder = "Search Keyword" className='h-full w-full pl-14 font-light text-sm focus:outline-none rounded-l' />
                        <BiSearchAlt className='topnav_search absolute top-5 left-7 text-iconblue'/>
                    </div>
                </div>
                <div className="basis-1/3 h-14 flex items-center justify-center">
                <div className="relative w-full">
                    <select className="block appearance-none w-full h-14 text-gray-700 py-3 pl-6 text-blacktwo pr-8 leading-tight bg-white focus:outline-none focus:bg-white border-0 text-sm" id="grid-state">
                    <option>Select Location</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-0 top-0 flex items-center pr-6 text-gray-700">
                        <HiOutlineLocationMarker className='text-iconblue'/>
                    </div>
                </div>
                </div>
                <div className="relative basis-1/3 bg-white flex h-14 items-center ">
                    {/* <MdDateRange/> */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 top-0.2 flex items-center pr-6 text-gray-700">
                        <MdDateRange className='text-iconblue'/>
                    </div>
                    <p className='text-sm pl-6 '>Select Date</p>
                    {/* <ReactDatePicker placeholder="mm/dd" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                </div>
                <div className="basis-1/4  bg-primary seacch h-14 flex items-center justify-center rounded-r"><button className='h-full text-white w-full rounded-r-lg'>Search</button></div>
            </div>
        </>
    );
}


/**======== HEALTHPROVIDER SUB-COMPONENT ========== * */
const Dash = () => {
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base'>Healthcare Provider Claims</h2>
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
                <Card user="Total Claims" number="1,452"/>
                <Card user="Approved Claims" number="2,452"/>
                <Card user="Pending Claims" dollar number="532,452"/>
                <Card user="Declined Claims" number="1,452"/>
            </div>

            {/*  Filter */}
            <Filter/>

            {/* Table */}
             <Table
                limit = "5"
                headData = {claimsTable.head}
                renderHead = {(item, index) => renderHead(item, index)}
                bodyData = {claimsTable.body}
                renderBody = {(item, index) => renderbody(item, index)}
            /> 
        </>
    )
}

/**======== HEALTHPROVIDER ========== * */
const HealthProvider = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default HealthProvider