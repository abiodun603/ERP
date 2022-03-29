import { Avatar } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import {MdAdd} from "react-icons/md"
import { COLORS } from '../../assets/theme/theme'
import { PasswordField, TextField } from '../../components/FormComponent'
import Button from '../../components/shared/button'
import { ProfileDetails } from '../../styles/dashboard.style'
/**======== SUBSCRIPTION PAYMENT SUB-COMPONENT ========== * */
const Dash = () => {
    const { handleSubmit, errors, formState, register } = useForm({
        mode: "onChange"
      });
    return (
        <>
            {/* Card 1 */}
            <ProfileDetails>
                {/* Card Header */}
                <div className='flex items-center justify-between'>
                    {/* title */}
                    <h3>Profile Details</h3>
                    {/* button */}
                    <Button>Edit Profile</Button>
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
                <div className="grid grid-rows-3 grid-flow-col gap-6 mt-5">
                    <div className="row-span-3  col-span-2 ">
                        <div className="form_container" style={{flexDirection: "column"}}>
                            <form>
                                <TextField
                                    label="First Name"
                                    name="fname"
                                    type="text"
                                    placeholder="Abiodun"
                                    required={true}
                                    {...register("text", { required: true })}
                                />
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="abcd@xerde.com"
                                    required={true}
                                    {...register("email", { required: true })}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="row-span-3  col-span-2 ">
                    <div className="form_container" style={{flexDirection: "column"}}>
                        <form>
                            <TextField
                                label="Last Name"
                                name="fname"
                                type="text"
                                placeholder="Ife"
                                required={true}
                                {...register("text", { required: true })}
                            />
                            <TextField
                                label="Phone Nummber"
                                name="phone"
                                type="tel"
                                placeholder="0902000200"
                                required={true}
                                {...register("email", { required: true })}
                            />
                        </form>
                        </div>
                    </div>
                </div>
            </ProfileDetails>

            {/* Card2 */}
            {/* Card 1 */}
            <ProfileDetails>
                {/* Card Header */}
                <div className='flex items-center justify-between'>
                    {/* title */}
                    <h3>Change Password</h3>
                </div>

                {/* Profile Details Forms */}
                <div className="grid grid-rows-3 grid-cols-4 grid-flow-col gap-6 mt-5 pb-3">
                    <div className="row-span-3  col-span-2 ">
                        <div className="form_container" style={{flexDirection: "column"}}>
                            <form>
                            <PasswordField
                                label="Current Password"
                                name="password"
                                required={true}
                                placeholder="Enter password"
                                {...register("password", { required: true })}
                            />

                            <PasswordField
                                label="Confirm Password"
                                name="password"
                                required={true}
                                placeholder="Enter password"
                                {...register("password", { required: true })}
                            />
                            </form>
                        </div>
                    </div>
                    <div className="row-span-3  col-span-2 ">
                        <div className="form_container" style={{flexDirection: "column"}}>
                            <form>
                                <PasswordField
                                    label="New Password"
                                    name="password"
                                    required={true}
                                    placeholder="Enter password"
                                    {...register("password", { required: true })}
                                />
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div className='grid-rows-3'>
                    <Button buttonSize="btn--xl--primary">Change Password</Button>
                </div>
            </ProfileDetails>
        </>
    )
}
const Profile = () => {
  return (
    <>
        <Dash/>
    </>
  )
}

export default Profile