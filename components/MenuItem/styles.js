import { number } from "prop-types";
import styled from "styled-components";

export const MenuItemContainer = styled.a 
  `
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding: 10px 30px 10px 30px;
  align-items: center;
  justify-content: space-between;
  color: #A6B0CF;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #00022e;
    color: #fc86aa;
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: #00022e;
    color: #fff;
  }
`;