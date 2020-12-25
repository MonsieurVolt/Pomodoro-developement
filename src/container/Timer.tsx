import React from "react";
interface Props {
	time: number[];
}

const Timer: React.FC<Props> = ({ time }) => {
	let a = time.map((number: number) => (number < 9 ? "0" + number : number));
	return (
		<>
			<div id="time-left">{a[0] + ":" + a[1]}</div>
		</>
	);
};
export default Timer;
