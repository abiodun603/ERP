import React from 'react'
// import { CustomButton } from '../../styles/button.style';

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--grey--solid",
    "btn--danger--solid",
    
];

const SIZES = ["btn--medium", "btn--small", "btn--large", "btn--table"];


function Button({children, type, onClick, buttonStyle, buttonSize}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={onClick} type={type} className={` leading-tight uppercase shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out btn ${checkButtonStyle} ${checkButtonSize}`} >
            {children}
        </button>
    )
}

export default Button