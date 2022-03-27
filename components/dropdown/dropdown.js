import React, {useRef} from 'react'
import { DropDownContent, DropDownFooter, DropDownToggle, DropDownToggleBadge, DropDownWrapper } from './style-dropdown';
import {IoNotificationsOutline} from "react-icons/io5"
import { COLORS } from '../../assets/theme/theme';



const isBrowser = typeof window !== "undefined";

const clickOutsideRef = (content_ref, toggle_ref) => {
    isBrowser ? 
    document.addEventListener("mousedown", (e) => {
        // user click toggle
        if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active")
        }else {
            // user click outside toggle and content
            if(content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active');
            }
        }
    }) : null
}

const Dropdown = ({icon, badge, customToggle, ...props})=> {

    const dropdown_toggle_el = useRef(null);
    const dropdown_content_el = useRef(null);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <>
            <DropDownWrapper>
                <DropDownToggle ref = {dropdown_toggle_el}>
                    {
                        icon ? <IoNotificationsOutline style={{
                            fontSize: 25,
                            color: COLORS.kgrey,
                            marginRight: 30,
                            marginTop: 5
                            
                        }} /> : ""
                    }
                    {
                        badge ? <DropDownToggleBadge >{badge}</DropDownToggleBadge> : ""
                    }
                    {
                        customToggle ? customToggle() : ""
                    }
                </DropDownToggle>
                <DropDownContent ref = {dropdown_content_el}>
                    {
                        props.contentData && props.renderData ? props.contentData.map((item, index) =>
                            props.renderData(item, index)
                        ) : ""
                    }
                    {
                        props.renderFooter ? (
                            <DropDownFooter>
                                {
                                    props.renderFooter()
                                }
                            </DropDownFooter>
                        ) : ""
                    }
                </DropDownContent>
            </DropDownWrapper>
        </>
    )
}

export default Dropdown