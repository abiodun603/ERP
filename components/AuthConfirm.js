import React from "react";
import { AuthContainer, CredentialBox, ImageBox } from "../styles/layout.style";
import {RiHeartAddFill} from "react-icons/ri"
import Link from "next/link";
import { COLORS, SIZES } from "../assets/theme/theme";
import {FaEnvelope} from "react-icons/fa"
import { Button } from "../styles/widget.style";

const AuthConfirm = ({children, ...props }) => (
  <AuthContainer>
    <ImageBox {...props} img={props.img}>
      	<div>{props.bannerTitle}</div>
    </ImageBox>
    <CredentialBox>
		<div className="credentialHeader">
			<RiHeartAddFill className="credentialIcon"/>
			<h2>HMO Platform</h2>
		</div>
		<div className="credentialConfirmation">

				{/* <div style= {{width: "100%"}}> */}
				{/* Circle Image  */}
				<div className="credentialConfirmationCircle">
						{/* <FaEnvelope className="credentialConfirmationCircleIcon"/> */}

						< props.icon className="credentialConfirmationCircleIcon"/>
				</div>
				{/* title */}
						<h3>{props.title}</h3>
				{/* discription */}
				<p className="credentialConfirmationDescription">
						{props.discription}
				</p>
				{/* Button */}
				{
					props.button && 
						<Button
						bg = "#34C38F"
						border = {`1px solid #34c38f`}
						width = {"127"}
						style= {{
							marginTop: 10
						}}
						>Back to Sign in
					</Button>
				}
					
				{/* link */}
					{
						props.signin && 
						<div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 60}}>
							<p style = {{color: COLORS.kblackCom, fontSize: SIZES.body4, fontWeight: "normal"}}>Didn&apos;t recieve an email ? </p>
							<Link 
								href="/"  
							>
								<a
								style = {
										{
										color: COLORS.kprimary,
										fontSize: SIZES.body4,
										fontWeight: "400",
										marginLeft: 10
										}
								}
								>Sign in here
								</a>
							</Link>
						</div>
					}
				
			{/* </div> */}
		</div>
		<div className="credentialFooter">
			<h3>
			&copy; 2020 HMO Platform
			</h3>
		</div>
    </CredentialBox>
  </AuthContainer>
);

export default AuthConfirm;
