import Image from 'next/image'
import React from 'react'
import logo from "../../assets/image/logo.svg"
import { BookSessionWrapper } from '../../styles/dashboard.style'
const Card = ({title, name, desc, children}) => {
  return (
    <>
          <BookSessionWrapper>
            {/* session details */}
            <h3>{title}</h3>

            {/* profile dp */}
            <div className='sessionProfile'>
                 {/* picture */}
                <div className='sessionCardImage mr-4 flex items-center justify-start'>
                  <Image src= {logo} alt =" " height={84} />
                </div>
                {/* data */}
                <div className='sessionData'>
                    {/* name */}
                    <h3 className='name'>{name}</h3>
                    <div className='location'>
                        {/* local */}
                        <span>{desc}</span>
                    </div>
                </div>
            </div>

            {children}
        </BookSessionWrapper>
    </>
  )
}

export default Card