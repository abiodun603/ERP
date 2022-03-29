import React from 'react'
import HealthProvider from '../../../pages/health-claims/healthProvide'
import Dashboard from '../../../pages/dashboard'
import { Sidebar } from '../../sidebar/sidebar'
import Topnav from '../../topnav/topnav'
import { LayoutContent, LayoutContentMain, LayoutWrapper } from './style-layout'
import UserHealthProvider from '../../../pages/users/healthproviders'
import IndividualUser from '../../../pages/users/individual'
import IndividualDetails from '../../../pages/users/individual-details'
import HospitalAppointment from '../../../pages/appointments/hospital-appoint'
import SubscriptionPayment from '../../../pages/payments/subs-payment'
import ClaimsPayment from '../../../pages/payments/claims-payment'
import Profile from '../../../pages/account-setting/profile'
import PaymentPend from '../../../pages/users/payment-pending'
import HospitalDetails from '../../../pages/appointments/hospital-details'
const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Sidebar/>
        <LayoutContent>
            <Topnav/>
            <LayoutContentMain>
              {/* <Dashboard/> */}
              {/* <HealthProvider/> */}
              {/* <UserHealthProvider/> */}
              {/* <IndividualUser/> */}
              {/* <IndividualDetails/> */}
              {/* <HospitalAppointment/> */}
              {/* <SubscriptionPayment/> */}
              {/* <ClaimsPayment/> */}
              {/* <Profile/> */}
              {/* <PaymentPend/> */}
              <HospitalDetails/>
            </LayoutContentMain>
          </LayoutContent>
        </LayoutWrapper>
    </>
  )
}

export default Layout