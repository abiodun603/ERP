import styled from "styled-components"
import { COLORS, SIZES } from "../assets/theme/theme"

export const DashCard = styled.div`
    height: 160px;
    width: 270px;
    background-color: ${COLORS.kwhite};
    box-shadow: 0px 10px 20px rgba(18, 38, 63, 0.0313726);
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

    .ava{
        .circleAvatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(85, 110, 230, 0.2);
            mix-blend-mode: normal;
        }
    }

    .text-green{
        padding: .1rem .3rem;
    }
`

export const ProfileDetails = styled.div`
    width: 798px;
    background-color: ${COLORS.kwhite};
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.0313726);
    border-radius: 4px;
    padding: 1rem 1rem 2.5rem 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
`

/**  CARD DETAILS  */
export const BookSessionWrapper = styled.div  `
    width: 560px;
    background: ${COLORS.kwhite};
    border-radius: ${SIZES.radiusx};
    box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.0313726);
    margin: 1.5rem auto;
    padding: 1.6rem 2rem;

    .table-spacing{
        border-collapse: seperate;
        border-spacing: 0 10px !important;        
    }
    table > *:last-child > tr:last-of-type {
        border-top: 2px solid ${COLORS.kblack};
        border-bottom: 2px solid ${COLORS.kblack};
    }
    thead{
       border-top: 1px solid #EEEEEE;
       border-bottom: 1px solid #EEEEEE;
       padding: 1rem 0;

       tr{
        text-align: left;
            th, td {
                text-transform: capitalize;
                padding: 10px 10px;
                color:  ${COLORS.kblackCom};
                font-size: ${SIZES.body6};
                font-weight : 400;
            }
        }
    }

   tbody{
      color: ${COLORS.kblackCom};
      font-weight: 400;

      tr{
        text-align: left;
            th, td {
                text-transform: capitalize;
                padding: 10px 10px;
                color:  ${COLORS.kblackCom};
                font-size: ${SIZES.body6};
                font-weight : 400;
            }
        }
    }


    h3{
        color: ${COLORS.kblackCom};
        font-size: ${SIZES.h2};
        font-weight: 600;
        margin-bottom: 20px
    }

    .sessionProfile {
        width: 100%;
        height: 72px;
        border-radius: ${SIZES.radiusx};
        background-color: ${COLORS.kwhite} !important;
        display: flex;
        align-items: center;

        .sessionData{
            .name{
                color: ${COLORS.kblackCom};
                font-size: ${SIZES.body4};
                font-weight: 500;
            }

            .location{
                display: flex;
                align-items: center;
                margin-top: -15px;
                span:nth-child(1){
                    color: ${COLORS.ksecondary};
                    font-weight: 400;
                    font-size: ${SIZES.body5};
                }
            }
        }
    }

    .view_profile{
        // background: red;
        display: flex;
        align-items: center;
        .icon{
            color: ${COLORS.kprimary};
            font-size: 2.3rem;
            padding: .5rem; 
            border: 1px solid rgba(0, 98, 255, 0.15);
            border-radius: ${SIZES.radiusx};
            cursor: pointer;
        }

        button{
            color: ${COLORS.kprimary};
            font-weight: 400;
            font-size: ${SIZES.h5};
        }
    }

    .payment{
        p:nth-child(1){
            color: ${COLORS.ksecondary};
            font-weight: 500;
            font-size: ${SIZES.body5}
        }

        p:nth-child(2){
            color: ${COLORS.kblackCom};
            font-weight: 500;
            font-size: ${SIZES.font};
        }
    }

    .message{
        color: ${COLORS.kblackCom};
        font-size: ${SIZES.body5};
        font-weight: 500;
    }

    .grid {
        border-radius: 10px;

        div{
            height: 100%;
            
            span{
                font-size: 12px;
                color: #B5B5BE;
                font-weight: 400;
            }

            h3{
                color: ${COLORS.kbackGray2};
                font-size: 14px;
                font-weight: 500;
            }
        }

        div:nth-child(1){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 10px 0px 0px 10px;
        }

        div:nth-child(2){
            border: 1px solid ${COLORS.kborder};
            height: 80px;
            border-radius: 0px 10px 10px 0px;
            border-left-color: transparent;
        }

        .doctor{
            color: ${COLORS.kblackCom};
            font-size: ${SIZES.body5};
            font-weight: 500;
        }

        /*************** Table ***************/
        
    }
`

