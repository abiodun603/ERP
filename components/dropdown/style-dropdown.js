import styled from "styled-components"
import { COLORS } from "../../assets/theme/theme"

export const DropDownWrapper = styled.div `
    position: relative;
    z-index: 99;
`

export const DropDownToggle = styled.button `
    border: 0;
    outline: 0;
    background-color: transparent !important;
    position: relative;

    i{
        font-size: 2.5rem;
        color: red; //
    }
`

export const DropDownToggleBadge = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    right: 14px;
    height: 22px;
    width: 30px;
    border-radius: 50px;
    background-color: ${COLORS.kbadge}; //
    color: ${COLORS.kwhite};
    font-size: .8rem;
`

export const DropDownContent = styled.div `
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: max-content;
    max-width: 400px;
    background-color: ${COLORS.kwhite}; //
    box-shadow: rgba(149, 157, 165, .2) 0px 8px 24px; //
    border-radius: 15px; //
    overflow: hidden;
    transform-origin: top right;
    transform: scale(0);
    transition: transform 0.3s ease 0s;
    color: ${COLORS.ksecondary};

    &.active {
        transform : scale(1);
        transition: transform .5s var(--transition-cubic) ; //
    }
`

export const DropDownFooter = styled.div  `
    padding: 20px;
    text-align: center;
`

