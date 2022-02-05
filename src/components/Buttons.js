import styled from "styled-components";
import { defaultTheme, neutral, purple, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
const BUTTON_MODIFIERS = {
	small: () => `
    font-size: ${typeScale.small};
    padding: 8px;
    `,
	large: () => `
    font-size: ${typeScale.h4};
    padding: 16px 24px;
    `,
	warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    &:hover, &:focus{
        background-color: ${defaultTheme.status.warningColorHover};
        outline: 2px solid ${defaultTheme.status.warningColorHover};
    }
    &:active{
        background-color: ${defaultTheme.status.warningColorActive};
    }
    `,
	"warning-secondary": () => `
    color: ${defaultTheme.status.warningColor};
    border-color: ${defaultTheme.status.warningColor};
    &:hover, &:focus{
        color: ${defaultTheme.status.warningColorHover};
        border-color: 2px solid ${defaultTheme.status.warningColorHover};
    }
    &:active{
        color: ${defaultTheme.status.warningColorActive};
    }
    `,
	error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};
    &:hover, &:focus{
        background-color: ${defaultTheme.status.errorColorHover};
        outline: 2px solid ${defaultTheme.status.errorColorHover};
    }
    &:active{
        background-color: ${defaultTheme.status.errorColorActive};
    }
    `,
	"error-secondary": () => `
    color: ${defaultTheme.status.errorColor};
    border-color: ${defaultTheme.status.errorColor};
    &:hover, &:focus{
        color: ${defaultTheme.status.errorColorHover};
        border-color: 2px solid ${defaultTheme.status.errorColorHover};
    }
    &:active{
        color: ${defaultTheme.status.errorColorActive};
    }
    `,
	success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};
    &:hover, &:focus{
        background-color: ${defaultTheme.status.successColorHover};
        outline: 2px solid ${defaultTheme.status.successColorHover};
    }
    &:active{
        background-color: ${defaultTheme.status.successColorActive};
    }
    `,
	"success-secondary": () => `
    color: ${defaultTheme.status.successColor};
    border-color: ${defaultTheme.status.successColor};
    &:hover, &:focus{
        color: ${defaultTheme.status.successColorHover};
        border-color: 2px solid ${defaultTheme.status.successColorHover};
    }
    &:active{
        color: ${defaultTheme.status.successColorActive};
    }
    `,
};
const Button = styled.button`
	padding: 12px 24px;
	font-size: ${typeScale.p};
	border-radius: 2px;
	min-width: 100px;
	cursor: pointer;
	font-family: "Poppins", sans-serif;
	transition: background-color 0.2s linear;
	&:focus {
		outline: 2px solid ${defaultTheme.primaryColor};
		outline-offset: 2px;
	}
	&:disabled {
		cursor: not-allowed;
	}
`;
export const PrimaryButton = styled(Button)`
	background-color: ${defaultTheme.primaryColor};
	border: none;
	color: ${defaultTheme.textColor};
	border-radius: 4px;
	&:hover,
	&:active {
		background-color: ${purple[400]};
	}
	&:disabled {
		background-color: ${defaultTheme.disabled};
		color: ${defaultTheme.textOnDisabled};
	}
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
	color: ${neutral[600]};
	background-color: ${neutral[100]};
	&:hover,
	&:active {
		background-color: ${neutral[300]};
	}
	&:disabled {
		color: ${defaultTheme.disabled};
		border: 1px solid ${defaultTheme.disabled};
		background: none;
	}
	border: 1px solid ${defaultTheme.primaryColor};
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
	color: ${neutral[600]};
	background-color: ${neutral[100]};
	&:hover,
	&:active {
		background-color: ${neutral[300]};
	}
	&:disabled {
		color: ${defaultTheme.disabled};
		background: none;
	}
	border: none;
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
