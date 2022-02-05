import React from "react";
import ReactDOM from "react-dom";
import { SignUpModal } from "./components";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { GlobalStyle } from "./utils";

export default function App() {
	return <div>Hello world</div>;
}

ReactDOM.render(
	<>
		<PrimaryButton modifiers="small">Hello world</PrimaryButton>
		<SecondaryButton modifiers={["large"]}>Hello world</SecondaryButton>
		<TertiaryButton>Hello world</TertiaryButton>
		<PrimaryButton disabled>Hello world</PrimaryButton>
		<SecondaryButton disabled>Hello world</SecondaryButton>
		<TertiaryButton disabled>Hello world</TertiaryButton>
		<PrimaryButton modifiers="warning">Hello world</PrimaryButton>
		<SecondaryButton modifiers={["warning-secondary"]}>
			Hello world
		</SecondaryButton>
		<PrimaryButton modifiers="error">Hello world</PrimaryButton>
		<SecondaryButton modifiers={["error-secondary"]}>
			Hello world
		</SecondaryButton>
		<PrimaryButton modifiers="success">Hello world</PrimaryButton>
		<SecondaryButton modifiers={["success-secondary"]}>
			Hello world
		</SecondaryButton>
		<SignUpModal></SignUpModal>
		<GlobalStyle></GlobalStyle>
	</>,
	document.querySelector("#root")
);
