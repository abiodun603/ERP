import React from 'react'
import { Sidebar } from '../../sidebar/sidebar'
import Topnav from '../../topnav/topnav'
import { LayoutContent, LayoutContentMain, LayoutWrapper } from './style-layout'
const Layout = ({children}) => {
  return (
    <>
      <LayoutWrapper>
        <Sidebar/>
        <LayoutContent>
            <Topnav/>
            <LayoutContentMain>
              {children}
            </LayoutContentMain>
          </LayoutContent>
        </LayoutWrapper>
    </>
  )
}

export default Layout