import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../store/connectors";
type handle = (sec: number, up: boolean) => void;
type handleSet = (set: number) => void;
type handleControl = (up: boolean) => void;
const sumArr = (arr: number[]): number => arr[0] + arr[1];
interface Props {
	controlBreak: number;
	breakSec: number[];
	timeSec: number[];
	controlTime: number;
	downTime: handleControl;
	downBreak: handleControl;
	downTimeSec: handle;
	downBreakSec: handle;
	setBreakSec: handleSet;
	setTimeSec: handleSet;
}
const Pomodoro: React.FC<Props> = ({
	timeSec,
	controlTime,
	controlBreak,
	breakSec,
	downTime,
	downBreak,
	downBreakSec,
	downTimeSec,
	setBreakSec,
	setTimeSec,
}) => {
	const [play, setPlay] = useState(false);
	const [view, setView] = useState(true);
	// handle the change of the controller for the breaker
	useEffect(() => {
		setBreakSec(controlBreak);
	}, [controlBreak, setBreakSec]);
	useEffect(() => {
		setTimeSec(controlTime);
	}, [setTimeSec, controlTime]);
	useEffect(() => {
		let a: number = 0;
		if (play) {
			view
				? (a = window.setInterval(() => {
						downTimeSec(1, true);
				  }, 10))
				: (a = window.setInterval(() => {
						downBreakSec(1, true);
				  }, 10));
		}
		if (!play) clearInterval(a);
		if (sumArr(timeSec) === 0 && view) {
			setView(false);
			setBreakSec(controlBreak);
		} else if (sumArr(breakSec) === 0 && !view) {
			setView(true);
			setTimeSec(controlTime);
		}
		return () => window.clearInterval(a);
	}, [
		play,
		view,
		downTimeSec,
		downBreakSec,
		breakSec,
		controlBreak,
		controlTime,
		timeSec,
		setBreakSec,
		setTimeSec,
	]);
	return (
		<>
			<p>
				timer : {timeSec[0]} : {timeSec[1]}
			</p>
			<p>
				breaker : {breakSec[0]} : {breakSec[1]}
			</p>
			<p>timer control : {controlTime}</p>
			<p>breaker control : {controlBreak}</p>
			<button onClick={() => downTime(false)}>down time</button>
			<button onClick={() => downBreak(false)}>down break</button>
			<button onClick={() => setPlay(!play)}>paly</button>
		</>
	);
};
const Pomo = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
export default Pomo;
