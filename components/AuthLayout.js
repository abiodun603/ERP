import React from "react";
import { AuthContainer, CredentialBox, ImageBox } from "../styles/layout.style";
import {RiHeartAddFill} from "react-icons/ri"
import CarouselContainer from "./CarouselContainer";

const AuthLayout = ({children, ...props }) => (
  <AuthContainer>
    <ImageBox {...props} img={props.img}>
      <div>{props.bannerTitle}</div>
    </ImageBox>
    <CredentialBox>
      <div className="credentialHeader">
        <RiHeartAddFill className="credentialIcon"/>
        <h2>HMO Platform</h2>
      </div>
      <div className="credentialChildren">
        <div>
          <div className="credentialChildrenHeader" style={{ paddingBottom: "0.2em" }}>
            <h3>{props.title}</h3>
            <p>{props.discription}</p>
          </div>
          {children}
        </div>
      </div>
      <div className="credentialFooter">
        <h3>
          &copy; 2020 HMO Platform
        </h3>
      </div>
    </CredentialBox>
  </AuthContainer>
);

export default AuthLayout;
