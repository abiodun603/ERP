import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { BiCopyAlt } from 'react-icons/bi'
import { SIZES , COLORS} from '../assets/theme/theme'
import { DashCard } from '../styles/dashboard.style'
import dynamic from 'next/dynamic'
import { Box, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types';


const Chart= dynamic(
  () => import("react-apexcharts"),
  { ssr: false }
)

/**======== DASHBOARD CHARTOPTIONS COMPONENT ========== * */
const chartOptions = {
    series : [
        {
            name: "Active Users",
            data: [31,56,23,44,42, 22, 56, 33, 21,56,55, 80]
        },
        {
            name: "Revenue",
            data: [23,76,21,21,66, 34,45 , 23, 45,34, 78, 50]
        },
        {
            name: "Claims",
            data: [41,53,43,64,22, 42, 86,11, 52,49,32 ,20]
        }
    ],

    series2: [21.7, 46, 31.7],

    chartOptions: {
        labels: ['Platinum', 'Gold', 'Silver'],
        legend: {
            position: "bottom"
        }
    },
    
    options : {
        color: ["red", "black", "green"],
        chart: {
            background: "white",
            toolbar: {
                show: false //Disable toolbar
            },
            events: {
                mounted: (chart) => {
                  chart.windowResizeHandler();
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth"
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr","May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        legend: {
            position: "bottom"
        },
        grid: {
            show: true
        }
    } 
}

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

/**======== DASHBOARD CHART COMPONENT ========== * */
const Charts = () => {
    return (
        <>
            <div className="flex flex-row w-full mt-9">
                <div className="basis-2/3 mr-5 rounded bg-white rounded">
                    <h3 className='text-base font-semibold pl-5 mt-3 mb-4'>Overview</h3>
                    <Chart type="area" height="350px" color = {chartOptions.options.color} series = {chartOptions.series} options={chartOptions.options}/>
                </div>
                <div className="basis-1/3 bg-white pb-4 rounded">
                    <h3 className='text-base font-semibold pl-5 mt-3 mb-4'>Plan Analytics</h3>
                    <Chart type="donut" height="100%" color = {chartOptions.options.color} series = {chartOptions.series2} options={chartOptions.chartOptions}/>
                </div>
            </div>
        </>
    )
}

/**======== DASHBOARD TABLE COMPONENT ========== * */
function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabTable = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs style={{color: COLORS.kprimary}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Claims" {...a11yProps(1)} />
                    <Tab label="Subscriptions" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            </TabPanel>
            <TabPanel value={value} index={1}>
            Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
            Item Three
            </TabPanel>
        </>
    )
}

/**======== DASHBOARD SUB-COMPONENT ========== * */
const Dash = () => {
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base'>DASHBOARD</h2>
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
                <Card user="Active Plans" number="2,452"/>
                <Card user="Total Revenue" dollar number="532,452"/>
                <Card user="Total Claims" number="1,452"/>
            </div>

            {/* Chart */}
            <Charts/>

            {/*  Lastest Activites */}
            <div className='w-full min-h-full bg-white rounded mt-9 pl-5 pt-3 '>
                <h3 className='text-base font-semibold mt-3 mb-4'>Lastest Activities</h3>
                <TabTable/>
            </div>
        </>
    )
}

/**======== DASHBOARD DASHBOARD COMPONENT ========== * */
const Dashboard = () => {
  return (
    <div>
        <Dash/>
    </div>
  )
}

export default Dashboard