import styled from "styled-components";
import {COLORS, FONTS, SIZES} from "../../assets/theme/theme";

export const TopNavWrapper = styled.div `
    padding: 12px 20px 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${COLORS.kwhite};
    box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
    postion: absolute;
    
    .left_Topnav {
        display: flex;
        align-items: center;

        .search{
            position: relative;
            
            input[type="text"]{
                background: #f3f3f9;
                border: none;
                outline: none;
                padding: 1.1rem 0 1.1rem 2.8rem;
                width: 233px;
                border-radius: 30px;
                color: ${COLORS.ksecondary};
                font-size: ${SIZES.body5};

                ::placeholder,
                ::-webkit-input-placeholder {
                    color: ${COLORS.ksecondary};
                }
            }

            .topnav_search{
                position: absolute;
                color: black;
                left: 1rem;
                top: 17.9px;
                color: ${COLORS.ksecondary};
            }
        }

        .dropdown_select{
            padding: 1.5rem;
            background: transparent;
            width: 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.6rem;
            cursor: pointer;

            .select, .dropdown_icon{
                color: ${COLORS.kgrey};
            }
            .select{
                font-weight: 400;
                font-size: ${SIZES.body5};
            }

            .dropdown_icon{
                font-size: 18px;
            }
        }
    }

    /** Right Top Nav Sidebar **/
    .right_Topnav{

        display: flex;
        align-items: center;

        .right_Topnav-setting {
            color: ${COLORS.kgrey};
            font-size:  22px;
            margin-left: 15px;
            font-weight: 800;
            -webkit-transition: -webkit-transform 1s;

            &:hover{
                -webkit-transform: rotate(360deg) translateZ(0);
            }
        }
    }
`

export const TopnavUser = styled.div `
    display: flex;
    align-items: center;

    .topNavUserWrapper{
        display: flex;
        align-items: center;
    
        .topNavUsername {
            font-weight: 400;
            font-size: ${FONTS.body4};
            color: ${COLORS.kgrey};
            margin: 0 5px 0 12px;
        }
    }

    .dropdown_icon{
        color: ${COLORS.kgrey};
    }
`
export const TopNavNotificationItem = styled.div `
    display: flex;
    align-items: center;
    padding: 20px;
    cursor: pointer;

    &:hover {
        background: #FAFAFB;
    }

    i{
        margin-right: 20px;
        font-size: 1.5rem;
    }
`

