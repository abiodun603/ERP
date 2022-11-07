import React from 'react'
const Badge = ({type, content, style}) => {
  return (
    <div className={`badge badge-${type} `} style = {style}>
        {/* {content} */}
    </div>
  )
}

export default Badge