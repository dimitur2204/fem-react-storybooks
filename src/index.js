import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SignUpModal } from "./components";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { GlobalStyle } from "./utils";

export default function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<TertiaryButton onClick={() => setShowModal(!showModal)}>
				Hello world
			</TertiaryButton>
			<SignUpModal
				showModal={showModal}
				setShowModal={setShowModal}
			></SignUpModal>
			<GlobalStyle></GlobalStyle>
		</>
	);
}

ReactDOM.render(<App></App>, document.querySelector("#root"));
