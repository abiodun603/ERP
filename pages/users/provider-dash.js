import React, {useState} from 'react'
import Button from '../../components/shared/button'
import PropTypes from 'prop-types';
import { Avatar, Backdrop, Box, Chip, Tab, Tabs } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Table from '../../components/shared/table/table';
import { ProfileDetails } from '../../styles/dashboard.style';
import { MdAdd } from 'react-icons/md';
import { COLORS } from '../../assets/theme/theme';
import { TextField } from '../../components/FormComponent';
import { useForm } from 'react-hook-form';
import ScrollTextArea from '../../components/shared/scrollTextarea/scrollTextarea';

const hospitalTable = {
    head: [
        "Name",
        "Address",
        "Medical Services",
        "Location",
        "Action"
    ],

    body: [
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        },
        {
            name: "Abu Teaching Hospital",
            address: "5 Jibowu Crescent, Gra Ibadan",
            services: ["Specialized health care", "Surgery", "General Care", "Diagnostic"],
            location: "Ibadan",
        }
    ]
}
// index below should be change to id
const renderHead = (item, index) => <th key = {index}>{item}</th>
// render table body
const renderbody = (item, index) => (
    <tr key = {index} className = "">
        <td className = "">{item.name}</td>
        <td className = "">{item.address}</td>
        <td className = "">{
            item.services.map((t, index) => {
                return (
                    <>
                        <Chip label= {t} className="mr-1"/>
                    </>
                )
            })
        }</td>
        <td className = "">{item.location}</td>
        <td>
            <div className='flex items-center '>
                <Button buttonSize="btn--table" onClick={() => router.push('/hospital/hospital-profile')}>View Details</Button>
                {/* <Dropdown
                    customToggle = {() => renderClaimsToggle()}
                    contentData = {hospitalDrop}
                    renderData = {(item, index) => renderClaimsData(item, index)}
                /> */}
            </div>
        </td>
    </tr>
)
/**======== DASHBOARD TAB COMPONENT ========== * */
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
                <Box>
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
        <Box>
            <div className='bg-white py-6 rounded px-3'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Hospitals" {...a11yProps(0)} />
                        <Tab label="Eye Clinic" {...a11yProps(1)} />
                        <Tab label="Dental" {...a11yProps(2)} />
                        <Tab label="Diagnostics Centers" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </div>
            <TabPanel value={value} index={0}>
                {/*  Filter */}
                <Filter/>
                {/* Table */}
                <div className='-mt-3'>
                    <Table
                        limit = "5"
                        headData = {hospitalTable.head}
                        renderHead = {(item, index) => renderHead(item, index)}
                        bodyData = {hospitalTable.body}
                        renderBody = {(item, index) => renderbody(item, index)}
                    /> 
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>          
    )
}

/**======== SUBSCRIPTION PAYMENT FILTER COMPONENT ========== * */
const Filter = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="flex flex-row w-full mt-5 mb-6">
                <div className="basis-1/2 rounded-l">
                    <div className=' h-full w-full relative rounded-l'>
                        <input type="text" placeholder = "Search Keyword" className='h-full w-full pl-14 font-light text-sm focus:outline-none rounded-l' />
                        <BiSearchAlt className='topnav_search absolute top-5 left-7 text-iconblue'/>
                    </div>
                </div>
                <div className="basis-1/2 h-14 flex items-center justify-center">
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
                <div className="basis-1/6 bg-primary seacch h-14 flex items-center justify-center text-base rounded-r"><button className='h-full text-base text-white w-full rounded-r-lg'>Search</button></div>
            </div>
        </>
    );
}
/**======== HOSPITAL APPOINTMENT SUB-COMPONENT ========== * */
const Dash = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] =  useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base text-kblackCom'>Hospital Appointments</h2>
                <div className = "flex items-center">
                <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                        >
                        <AddProvider/>
                </Backdrop>
                <Button buttonStyle="btn--green--solid" buttonSize="btn--xl--primary" onClick={handleToggle}>Add Provider</Button>
                
                </div>
            </div>

            <TabTable/>
        </>
    )
}

const AddProvider = () => {
    const { handleSubmit, errors, formState, register } = useForm({
        mode: "onChange"
      });
    return (
        <>
            <ProfileDetails>
                {/* Card Header */}
                <div className='flex items-center justify-between'>
                    {/* title */}
                    <h3>Add Health Provider</h3>
                    {/* button */}
                    {/* <Button>Edit Profile</Button> */}
                </div>

                {/* Circle Avatar */}
                <div className='relative inline-block w-fit mt-6'>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 87, height: 87 }}
                    />
                    {/* Absolute + button */}
                    <div className='absolute right-2 bottom-0'>
                        {/*====  + icons =====*/}
                        <Avatar className = " text-kwhite" sx={{ width: 23, height: 23, backgroundColor: COLORS.kgreen }}>
                            <MdAdd/>
                        </Avatar>
                    </div>
                </div>

                {/* Profile Details Forms */}
                <form>
                    <div className="flex flex-row w-full">
                        <TextField
                            label="Provider Name"
                            name="fname"
                            type="text"
                            placeholder="Enter name"
                            required={true}
                            {...register("text", { required: true })}
                        />
                    </div>

                    <div className="flex flex-row w-full -mt-4">
                        <TextField
                            label="Email"
                            name="fname"
                            type="text"
                            placeholder="Enter Provider email"
                            required={true}
                            {...register("text", { required: true })}
                        />
                        <span className='mr-6'></span>
                        <TextField
                            label="Phone Number"
                            name="fname"
                            type="text"
                            placeholder="Enter Provider phone number"
                            required={true}
                            {...register("text", { required: true })}
                        />
                    </div>

                    <div className="flex flex-col flex-row w-full">
                            <p className='mb-2'>Provider Description</p>
                            <ScrollTextArea/>
                    </div>

                    <div className="flex flex-row w-full">
                        <TextField
                            label="Provider Type"
                            name="fname"
                            type="text"
                            placeholder="Enter Provider email"
                            required={true}
                            {...register("text", { required: true })}
                        />
                        <span className='mr-6'></span>
                        <TextField
                            label="RC. Number"
                            name="fname"
                            type="text"
                            placeholder="Enter RC. number"
                            required={true}
                            {...register("text", { required: true })}
                        />
                    </div>

                    <div className="flex flex-col flex-row w-full">
                            <p className='mb-2'>Address</p>
                            <ScrollTextArea/>
                    </div>

                    <div className='flex mt-6'>
                        
                        <Button buttonSize="btn--xl--primary">Add Provider</Button>
                        <span className='mr-4'></span>
                        <Button buttonStyle="btn--grey--solid" buttonSize="btn--large">Cancel</Button>
                    </div>
                </form>
                   

            </ProfileDetails>
   
        </>
    )
}


const ProviderDash = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default ProviderDash