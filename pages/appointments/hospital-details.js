import React, {useState} from 'react'
import { BiChat } from 'react-icons/bi';
import Button from '../../components/shared/button';
import Card from '../../components/shared/card';
import ScrollTextArea from '../../components/shared/scrollTextarea/scrollTextarea'

const DetailsCard = () => {
    const [startDate, setStartDate] = useState(new Date());

   return (
       <div className='w-fit  flex-column' style={{margin:"3rem auto 0 auto"}}>
           <div className='flex justify-between items-center'>
               {/* date */}
               <p className='font-normal text-sm text-blackCom'>August 01 2021</p>
                <div className='flex'>
                    <Button buttonSize="btn--xl--primary">Approve</Button>
                    <span className='mr-3'></span>
                    <Button buttonStyle = "btn--danger--outline" buttonSize="btn--xl--primary">Decline</Button>
                </div>
           </div>
            <Card
                title = "Appointment Details"
                name = "Abu Teaching Hospital"
                desc = "5 Jibowu Crescent, Gra Ibadan"
            >
                {/* view profile action */}
                <div className='view_profile mt-7'>
                    {/* icon */}
                    <BiChat className='icon mr-2'/>
                    {/* text */}
                    <button>View Profile</button>
                </div>
                {/* session details */}
                <div className="grid grid-cols-2 gap-0 mt-6">
                    <div className="flex flex-col justify-center pl-6">
                        {/* date */}
                        <span>Date</span>
                        <p>Thu. 18/10/2022</p>
                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    </div>
                    <div className="flex flex-col justify-center pl-6">
                        {/* Time */}
                        <span>Time</span>
                        <p>2pm - 4pm</p>
                    </div>
                </div>
                {/* payment */}
                <div className='payment mt-6'>
                    <p className='mb-1'>Preferred Doctor</p>
                    <p>Dr Daniel Canales</p>
                </div>
                {/* message body */}
                <div className='message mt-6'>
                    <p className='mb-2'>Message</p>
                    <ScrollTextArea/>
                </div>
            </Card>

            <Card
                name = "Abu Teaching Hospital"
                desc = "5 Jibowu Crescent, Gra Ibadan"
            >
                {/* view profile action */}
                <div className='view_profile mt-7'>
                    {/* icon */}
                    <BiChat className='icon mr-2'/>
                    {/* text */}
                    <button>View Profile</button>
                </div>
            </Card>
       </div>
   )
}
const HospitalDetails = () => {
  return (
    <>
        <DetailsCard/>
    </>
  )
}

export default HospitalDetails