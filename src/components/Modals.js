import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../components/Buttons";
import { Illustrations, Icons } from "../assets";
import { typeScale } from "../utils";
import { animated, config, useSpring } from "react-spring";

const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.formElementBackground};
	color: ${(props) => props.theme.textOnFormElementBackground};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	border-radius: 2px;
`;

const SignUpHeader = styled.h3`
	font-size: ${typeScale.h3};
`;

const SignUpText = styled.p`
	font-size: ${typeScale.p};
	max-width: 70%;
	text-align: center;
`;

const CloseModalButton = styled.button`
	cursor: pointer;
	border: none;
	background: none;
	position: absolute;
	right: 40px;
	top: 40px;
	width: 24px;
	padding: 0;
`;
export const SignUpModal = ({ showModal, setShowModal }) => {
	const animation = useSpring({
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0)` : `translateY(-200%)`,
		config: config.slow,
	});
	return (
		<animated.div style={animation}>
			<ModalWrapper>
				<img
					src={Illustrations.SignUp}
					alt="Sign up for an account"
					aria-hidden
				></img>
				<SignUpHeader>Sign up</SignUpHeader>
				<SignUpText>Sign up today to get access to nice stuff!</SignUpText>
				<PrimaryButton>Sign up </PrimaryButton>
				<CloseModalButton aria-label="close modal">
					<Icons.Close></Icons.Close>
				</CloseModalButton>
			</ModalWrapper>
		</animated.div>
	);
};
