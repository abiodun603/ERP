import { Backdrop } from '@mui/material';
import React, {useState} from 'react'
import { BiChat } from 'react-icons/bi';
import { HospitalConfirm } from '../../components/AuthConfirm';
import Button from '../../components/shared/button';
import Card from '../../components/shared/card';
import { FaCheck } from 'react-icons/fa';

const ReportCard = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] =  useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
   return (
        <div className='w-fit  flex-column' style={{margin:"3rem auto 0 auto"}}>
            {/* CLAIMS APPROVED/DECLINED BUTTON */}
            <div className='flex justify-between items-center'>
                {/* date */}
                <p className='font-normal text-sm text-blackCom'></p>
                <div className='flex'>
                    {/* ACCEPT BUTTON */}
                    <Button buttonSize="btn--xl--primary" onClick={handleToggle}>Approve</Button>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                        >
                            <HospitalConfirm
                                title = "Success !"
                                discription = "You have approoved James Kingsley appointemt at Abu Teaching Hospital"
                                icon = {FaCheck}
                                button = "View Appointment"
                            />
                    </Backdrop>
                    <span className='mr-3'></span>
                    {/* DECLINE BUTTON */}
                    <Button buttonStyle = "btn--danger--outline" buttonSize="btn--xl--primary">Decline</Button>
                </div>
            </div>

            {/* CLAIMS DETAILS */}
            <Card
                title = "Claim Details"
                name = "James Kingsley"
                desc = "WebBank Limited"
            >
                {/* view profile action */}
                <div className='view_profile mt-7'>
                    {/* icon */}
                    <BiChat className='icon mr-2'/>
                    {/* text */}
                    <button>View Profile</button>
                </div>

                {/* table */}
                <table className="table-fixed  w-full mt-6" >
                    <thead className='thead'>
                        <tr className='pt-3'>
                            {/* <span margin></span> */}
                            <th className='text-left text-blackcom text-sm font-semibold'>Amount: <span className='font-semibold'>$670.99</span></th>
                            <th  className='text-right text-blackcom text-sm font-normal'>August 01 2021</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bank Name</td>
                            <td className='text-right'>Zenith Bank</td>
                        </tr>
                        <tr>
                            <td>Account Number</td>
                            <td className='text-right'>0038472742</td>
                        </tr>
                        <tr>
                            <td>Account Name</td>
                            <td className='text-right'>Abu Teaching Hospital</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-right'>Total $670.99 </td>
                        </tr>
                    </tbody>
                </table>
            </Card>

            {/* CLAIMS REPORT */}
            <Card
                title = "Claim Report"
                name = "James Kingsley"
                desc = "WebBank Limited"
            >
                {/* view profile action */}
                <div className='view_profile mt-7'>
                    {/* icon */}
                    <BiChat className='icon mr-2'/>
                    {/* text */}
                    <button>View Profile</button>
                </div>

                {/*  */}
            </Card>
        </div>
   )
}
const ClaimsReport = () => {
  return (
    <>
        <ReportCard/>
    </>
  )
}

export default ClaimsReport