import { Box, Divider, Tab, Tabs } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import Button from '../../components/shared/button'
import { DetailsWrapper } from '../../styles/user.style'
import logo from "../../assets/image/logo.svg"
import PropTypes from 'prop-types';


/**======== UserHealthProvider Details COMPONENT ========== * */
const HealthProviderDetails = () => {
    return (
        <>
            <DetailsWrapper>
                <div className='hosiptal_details  px-5 py-8 rounded'>
                    {/* profile dp */}
                    <div className='hospitalProfile mb-8'>
                        {/* picture */}
                        <div className='hospitalCardImage mr-4 flex items-center justify-center'>
                            <Image src= {logo} alt =" " height={84} />
                        </div>
                        {/* data */}
                        <div className='hospitalData'>
                            {/* name */}
                            <h3 className='name'>Abu Teaching Hospital</h3>
                            <div className='specialist flex mt-2'>
                                {/* spcialist */}
                                <div className='spcialist_container py-1 px-3 rounded-full cursor-pointer ease-out duration-500 hover:scale-110'>
                                    <p>Specialized health care</p>
                                </div>

                                <div className='spcialist_container py-1 px-3 rounded-full cursor-pointer ease-out duration-500 hover:scale-110'>
                                    <p>Surgery</p>
                                </div>

                                <div className='spcialist_container py-1 px-3 rounded-full cursor-pointer ease-out duration-500 hover:scale-110'>
                                    <p>General Care</p>
                                </div>

                                <div className='spcialist_container py-1 px-3 rounded-full cursor-pointer ease-out duration-500 hover:scale-110'>
                                    <p>Diagnostic</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='description'>
                        {/* title: */}
                        <h3 className='mb-2'>Description :</h3>
                        {/* description details */}
                        <p>
                            To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are 
                            members of the same family. Their separate existence is a myth. For science, music, sport, etc,
                        </p>
                    </div>

                    <div className='sub-description mt-4'>
                        <div className='flex  mb-3 items-center'>
                            {/* icon */}
                            <RiArrowRightSLine className='icon mr-2'/>
                            {/* title */}
                            <p>5 Jibowu Crescent, Gra Ibadan</p>
                        </div>
                        <div className='flex mb-3 items-center'>
                            {/* icon */}
                            <RiArrowRightSLine className='icon mr-2'/>
                            {/* title */}
                            <p>08126354732</p>
                        </div>
                        <div className='flex mb-3 items-center'>
                            {/* icon */}
                            <RiArrowRightSLine className='icon mr-2'/>
                            {/* title */}
                            <p>example@email.com</p>
                        </div>
                    </div>

                    {/* action button */}
                    <div className='mt-9 flex'>
                        {/* button 1 */}
                        <Button type= "button" buttonStyle="btn--primary--solid" buttonSize = "btn--large">Message</Button>
                    </div>
                </div>

                {/* Facitilitys */}
                <div className="grid facilities grid-cols-4 gap-6 mt-6">
                    <div className="col-span-2 py-5 px-6">
                        <h3>Facility Specialists</h3>
                        <div className='mt-5'>
                            <Divider />
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>Abu Teaching Hospital</h3>
                                    </div>
                                </div>
                                <div className='py-1 px-3 rounded-full'>
                                    <p >Specialized health care</p>
                                </div>   
                            </div>

                            {/* 2 */}
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>Abu Teaching Hospital</h3>
                                    </div>
                                </div>
                                <div className='py-1 px-3 rounded-full'>
                                    <p >Specialized health care</p>
                                </div>   
                            </div>

                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>Abu Teaching Hospital</h3>
                                    </div>
                                </div>
                                <div className='py-1 px-3 rounded-full'>
                                    <p >Specialized health care</p>
                                </div>   
                            </div>

                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>Abu Teaching Hospital</h3>
                                    </div>
                                </div>
                                <div className='py-1 px-3 rounded-full'>
                                    <p >Specialized health care</p>
                                </div>   
                            </div>

                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>Abu Teaching Hospital</h3>
                                    </div>
                                </div>
                                <div className='py-1 px-3 rounded-full'>
                                    <p >Specialized health care</p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 py-5 px-6">
                        <h3 >Facility Equipments</h3>

                        <div className='mt-5'>
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>mx™ Compact Blood Pressure Monitor</h3>
                                    </div>
                                </div>  
                            </div>
                            {/* 2 */}
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>mx™ Compact Blood Pressure Monitor</h3>
                                    </div>
                                </div>  
                            </div>
                            {/* 3 */}
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>mx™ Compact Blood Pressure Monitor</h3>
                                    </div>
                                </div>  
                            </div>
                            {/* 4 */}
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>mx™ Compact Blood Pressure Monitor</h3>
                                    </div>
                                </div>  
                            </div>
                            {/* 5 */}
                            <Divider className='mt-3'/>
                            <div className='flex items-center justify-between mt-2'>

                                <div className='facilityProfile flex items-center'>
                                    {/* picture */}
                                    <div className='facilityCardImage mr-1 flex'>
                                        {/* <Image src= {logo} alt =" " width={48} /> */}
                                    </div>
                                    {/* data */}
                                    <div className='facilityData'>
                                        {/* name */}
                                        <h3 className=''>mx™ Compact Blood Pressure Monitor</h3>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className='w-full min-h-full bg-white rounded mt-9 pl-5 pt-3 '>
                    <h3 className='text-base font-semibold mt-3 mb-4'>Lastest Activities</h3>
                    <TabTable/>
                </div>
            </DetailsWrapper>
        </>
    )
}

/**======== UserHealthProvider TABLE COMPONENT ========== * */
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
                <Box >
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
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Activites" {...a11yProps(0)} />
                    <Tab label="Claims History" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Activites Table
            </TabPanel>
            <TabPanel value={value} index={1}>
                Claims History Table
            </TabPanel>
        </>
    )
}



const UserHealthProvider = () => {
  return (
    <div>
        <HealthProviderDetails/>
    </div>
  )
}

export default UserHealthProvider