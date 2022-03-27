import React from 'react'
import { RiHeartAddFill } from 'react-icons/ri'
import { SidebarWrapper } from './style-sidebar'
import { SidebarNav } from './sidebarNav'
// import {CSidebarNav} from "@coreui/react"
import { navigation } from '../../utils/ui-data'

export const Sidebar = ({children}) => {
  return (
    <>
        <SidebarWrapper>
            {/* HMO LOGO */}
            <div className = "hmo_logo">
                {/* icon */}
                <RiHeartAddFill className="hmo_logo-Icon"/>
                {/* description */}
                <h2 className='desc'>HMO Platform</h2>
            </div>

            {/* Profile Listing */}
            {/* <CSidebarNav style={{listStyle: "none"}}> */}
              {/* <SidebarNav items={navigation} /> */}
            {/* </CSidebarNav> */}

        </SidebarWrapper>
    </>
  )
}

