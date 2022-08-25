import React from "react";

function SayHello() {
	console.log("Hello!");
}

function Button(props) {
	return <button onClick={SayHello}>{props.label}</button>;
}

export default Button;
