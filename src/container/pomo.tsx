import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../store/connectors";
import Timer from "./Timer";
import { ReactComponent as PauseButton } from "./assets/pause.svg";
import { ReactComponent as PlayButton } from "./assets/play.svg";
import { ReactComponent as ResetButton } from "./assets/reset.svg";
import Controller from "./Controllers";

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
	reset: () => void;
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
	reset,
}) => {
	const audio: React.MutableRefObject<HTMLAudioElement> = useRef(null);
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
				  }, 1000))
				: (a = window.setInterval(() => {
						downBreakSec(1, true);
				  }, 1000));
		}
		if (!play) clearInterval(a);
		if (sumArr(timeSec) === 0 && view) {
			audio.current.play();
			setView(false);
			setBreakSec(controlBreak);
		} else if (sumArr(breakSec) === 0 && !view) {
			audio.current.play();
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
			<p>Pomodoro Timer</p>
			<div>
				{play ? (
					<button onClick={() => setPlay(false)} id="start_stop">
						<PauseButton />
					</button>
				) : (
					<button onClick={() => setPlay(true)} id="start_stop">
						<PlayButton />
					</button>
				)}{" "}
				<button
					onClick={() => {
						audio.current.currentTime = 0;
						audio.current.pause();
						setPlay(false);
						setView(true);
						reset();
					}}
					id="reset"
				>
					<ResetButton />
				</button>{" "}
			</div>
			<div id="screen">
				{view ? (
					<>
						<p id="timer-label">Session</p> <Timer time={timeSec} />
					</>
				) : (
					<>
						<p id="timer-label">Break</p> <Timer time={breakSec} />
					</>
				)}
			</div>
			<div id="controller">
				<Controller
					count={controlTime}
					handleChange={downTime}
					name="session"
				>
					<p id="session-label">Session length</p>
				</Controller>
				<Controller
					count={controlBreak}
					handleChange={downBreak}
					name="break"
				>
					<p id="break-label">Break length</p>
				</Controller>
			</div>
			<audio
				id="beep"
				src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
				ref={audio}
			></audio>
		</>
	);
};
const Pomo = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
export default Pomo;
