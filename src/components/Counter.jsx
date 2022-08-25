import React, { useEffect, useState } from "react";

function Counter() {
	let [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return <span>You just wasted {counter} seconds of your life.</span>;
}

export default Counter;
