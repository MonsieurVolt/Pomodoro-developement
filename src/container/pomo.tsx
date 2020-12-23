import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../store/connectors";
interface Props {
	clock: clock;
	downTime: (sec: number) => void;
}
const Pomodoro: React.FC<Props> = ({ clock, downTime }) => {
	return (
		<p>
			{clock[0]}: {clock[1]}
			<button onClick={() => downTime(5 * 60)}>down</button>
		</p>
	);
};
const Pomo = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
export default Pomo;
