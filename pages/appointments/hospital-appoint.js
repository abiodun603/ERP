import React, {useState} from 'react'
import Button from '../../components/shared/button'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SIZES } from '../../assets/theme/theme';
import Badge from '../../components/shared/badge/badge';
import { Box, Tab, Tabs, Tooltip } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import Table from '../../components/shared/table/table';
import { useRouter } from 'next/router';


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

// status color
const claimStatus = {
    "Declined" : "danger",
    "Posted": "success",
    "Pending" : "pending"
}
// index below should be change to id
const renderHead = (item, index) => <th key = {index}>{item}</th>
const Renderbody = (item, index) => {
    const router = useRouter();

    return(
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
                    <Button buttonSize="btn--table" onClick={() => router.push('/appointments/hospital-details')}>View Details</Button>
                    <Tooltip title="Report claim">
                        <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded'>
                            <MoreVertIcon  style={{fontSize: 17}}/>
                        </span>
                    </Tooltip>
                </div>
            </td>
        </tr>
)}
 
/**======== HEALTHPROVIDER FILTER COMPONENT ========== * */
const Filter = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="flex flex-row w-full mt-8 mb-6">
                <div className="basis-1/2 rounded-l">
                    <div className=' h-full w-full relative rounded-l'>
                        <input type="text" placeholder = "Search Keyword" className='h-full w-full pl-14 font-light text-sm focus:outline-none rounded-l' />
                        <BiSearchAlt className='topnav_search absolute top-6 left-7 text-iconblue'/>
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
                <div className="relative basis-1/3 bg-white flex items-center ">
                    {/* <MdDateRange/> */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 top-0.2 flex items-center pr-6 text-gray-700">
                        <MdDateRange className='text-iconblue'/>
                    </div>
                    <p className='text-sm pl-6 '>Select Date</p>
                    {/* <ReactDatePicker placeholder="mm/dd" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                </div>
                <div className="basis-1/4 bg-primary seacch h-14 flex items-center justify-center rounded-r"><button className='h-full text-white w-full rounded-r-lg'>Search</button></div>
            </div>
        </>
    );
}

/**======== HOSPITAL APPOINTMENT SUB-COMPONENT ========== * */
const Dash = () => {
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base text-kblackCom'>Hospital Appointments</h2>
                <div className = "flex items-center">
                    <div className="w-50 md:w-1/9 mb-6 md:mb-0 mr-2">
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal" style={{fontSize: SIZES.body5}}  id="grid-state">
                            <option>This Month</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <Button buttonStyle="" buttonSize="">Download</Button>
                </div>
            </div>

            {/*  Filter */}
            <Filter/>

            {/* Table */}
            <Table
                limit = "5"
                headData = {claimsTable.head}
                renderHead = {(item, index) => renderHead(item, index)}
                bodyData = {claimsTable.body}
                renderBody = {(item, index) => Renderbody(item, index)}
            /> 
        </>
    )
}

/**======== HOSPITAL APPOINTMENT COMPONENT ========== * */
const HospitalAppointment = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default HospitalAppointment