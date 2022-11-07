import styled from "styled-components";
import { COLORS, SIZES } from "../assets/theme/theme";

export const Label = styled.label`
  /** style the label of input field */
  font-weight: 600;
  color: ${COLORS.kblack};
  font-size: ${SIZES.body5};
  line-height: 45px;
`;

export const FormField = styled.div`
  /** style input field here */
  width: 100%;
  margin: 15px 0;
  position: relative;
  input,
  select,
  textarea {
    outline: none;
    border: none;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    background: #EEF1FB;
    width: 100%;
    box-sizing: border-box;
    height: 60px;
    padding: 0 30px;
    border-radius: 20px;

    ::placeholder{
      color: #B8C4CE;
    }
  }
  textarea {
    line-height: 5em;
    height: 380px;
    margin-top:.5rem;
    resize: none;
  }

  textarea:focus {
    background: white;
    border: 2.58px solid ${COLORS.kprimary}
  }

  input{
    padding-left: 4.5rem! important;
  }
  input:focus {
    background: white;
    border: 2.58px solid ${COLORS.kprimary}
  }

  ::placeholder {
    color: red;
  }

  .prefixIcon{
    position: absolute;
    left: 22px;
    top: 62%;
    
  }

  .file-input::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
  .file-input::before {
    content: "select some file";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;

export const PasswordType = styled.div`
  /** style password input here */
  border: 1px solid #d9dcef;
  border-radius: 3px;
  position: relative;
  display: flex;
  padding-right: 5px;
  input {
    width: 95%;
    border: none;

    ::placeholder{
      color: ${COLORS.ksecondary};
    }
  }
  .p_visible {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    cursor: pointer;
    font-size: 16px;
  }

`;
