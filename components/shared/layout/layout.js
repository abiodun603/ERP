import React from 'react'
import HealthProvider from '../../../pages/health-claims/healthProvide'
import Dashboard from '../../../pages/dashboard'
import { Sidebar } from '../../sidebar/sidebar'
import Topnav from '../../topnav/topnav'
import { LayoutContent, LayoutContentMain, LayoutWrapper } from './style-layout'
import UserHealthProvider from '../../../pages/users/healthproviders'
import IndividualUser from '../../../pages/users/individual'
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
              <IndividualUser/>
            </LayoutContentMain>
          </LayoutContent>
        </LayoutWrapper>
    </>
  )
}

export default Layout