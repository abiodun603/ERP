import styled from "styled-components"
import { COLORS } from "../assets/theme/theme"

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

        .title{
            
        }
    }

    .text-green{
        padding: .1rem .3rem;
    }
`