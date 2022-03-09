import Link from 'next/link'
import React from 'react'
import { IoMdLock } from 'react-icons/io'
import { Checkbox } from 'semantic-ui-react'
import AuthCard from '../../components/AuthCard'
import { PasswordField, TextField } from '../../components/FormComponent'
import { AppButton } from '../../components/Widget'
import { useForm } from "react-hook-form";
import { COLORS, SIZES } from '../../assets/theme/theme'

const Signin = () => {

  const { handleSubmit, errors, formState, register } = useForm({
    mode: "onChange"
  });
  return (
    <>
      <AuthCard
        title = "Welcome back !"
        discription = "Sign in to continue to dashboard"
      >
        <div className="form_container" style={{flexDirection: "column"}}>
          <form>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter email address"
              required={true}
              {...register("email", { required: true })}
            />
            <PasswordField
              label="Password"
              name="password"
              required={true}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />

            <div>
              <Checkbox label = "Remember me" style= {{color: COLORS.kblackCom, fontSize: SIZES.body4, display: "flex", alignItems: "center"}} />
            </div>

            <footer style={{ paddingTop: "1.5em", textAlign: "center" }}>
                <AppButton name="Sign In" type="submit" />
            </footer>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem"}}>
              <IoMdLock style={{fontSize: 18, color: COLORS.ksecondary, marginRight: 3}}/>
              <p style={{color: COLORS.ksecondary, fontSize: SIZES.body4}}>Forget your password</p>
            </div>
          </form>
        </div>
      </AuthCard>
    </>
  )
}

export default Signin