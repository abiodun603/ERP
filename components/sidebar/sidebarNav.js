import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
import PropTypes from "prop-types"

export const SidebarNav = ({items}) => {
  const {pathname} = useRouter();

  const navLink = (name, icon, badge) => {
    return (
      <>
        <span>{icon && icon}</span>
        <p>{name && name}</p>
        {
          badge ? (
            "badge"
          ) : ""
        }
      </>
    
    )
  }

  const navItem = (item, index) => {
    const {component, name, badge, icon, ...rest } = item;
    const Component = component

    return (
      <Component
        {...(rest.to && !rest.items && {component: Link})}
        // key = {index}
        {...rest}
        style = {{
          display: "flex"
        }}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const {component, name, icon, to, ...rest} = item
    const Component = component

    return (
      <Component
        idx = {String(index)}
        key = {index}
        toggler = {navLink(name, icon)}
        visibile = {pathname.startsWith(to)}
        {...rest}
        style = {{
          display: "flex",
          alignItems: "center",
        }}
      >
        {
          item.items?.map((item, index) => 
            item.items ? navGroup(item, index) : navItem(item, index),
          )
        }
      </Component>
    )
  }
  return (
    <>
        {
            items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))
        }
    </>
  )
}

SidebarNav.prototype = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  exact: PropTypes.bool
}