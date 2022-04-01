import React from 'react'
import { RiHeartAddFill } from 'react-icons/ri'
import { SidebarWrapper } from './style-sidebar'
import { SidebarNav } from './sidebarNav'
// import {CSidebarNav} from "@coreui/react"
import { MENU_ITEMS, navigation } from '../../utils/ui-data'
import MenuItemsList from '../MenuItemsList'

export const Sidebar = ({children}) => {
  return (
    <>
        <SidebarWrapper>
            {/* HMO LOGO */}
            <div className = "hmo_logo mb-12">
                {/* icon */}
                <RiHeartAddFill className="hmo_logo-Icon"/>
                {/* description */}
                <h2 className='desc'>HMO Platform</h2>
            </div>

            {/* Profile Listing */}
            {/* <CSidebarNav style={{listStyle: "none"}}> */}
            <MenuItemsList options={MENU_ITEMS} />            
            {/* </CSidebarNav> */}

        </SidebarWrapper>
    </>
  )
}

