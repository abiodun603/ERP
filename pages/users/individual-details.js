import React from 'react'
import Button from '../../components/shared/button'
import MoreVertIcon from '@mui/icons-material/MoreVert';

/**======== INDIVIDUAL-DETAILS SUB-COMPONENT ========== * */
const Dash = () => {
    return (
        <>
            {/* Card Header */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='font-semibold text-base text-kblackCom'>User Details</h2>
                <div className = "flex items-center">
                    <Button buttonStyle="" buttonSize="">Edit User</Button>
                    <div className='h-9 w-9 rounded bg-ksmallbutton ml-2 flex items-center justify-center'>
                        <MoreVertIcon className = "text-kblackCom"/>
                    </div>
                </div>
            </div>

           {/* User Profiel */}
           <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3  col-span-2 bg-primary">01</div>
                <div className="col-span-2 ... bg-black">02</div>
                <div className="row-span-2 col-span-2 bg-green ...">03</div>
            </div>
        </>
    )
}

/**======== INDIVIDUAL-DETAILS COMPONENT ========== * */
const IndividualDetails = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default IndividualDetails