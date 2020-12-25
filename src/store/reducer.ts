import { actionController, actionTime, clock } from "../types";
import {
	DOWNBREAK,
	DOWNTIME,
	RESET,
	DOWNTIMESEC,
	DOWNBREAKSEC,
	SETTIMESEC,
	SETBREAKSEC,
} from "./constants";
function setControl(number: number, up: boolean): number {
	if (number === 1 && !up) return 1;
	else if (number === 60 && up) return 60;
	return up ? number + 1 : number - 1;
}
function setTimeMinus(
	time: number[],
	minusSec: number,
	min: boolean
): number[] {
	let lessSec = time[1] - minusSec;
	time[1] = 0;
	while (lessSec < 0) {
		if (time[0] - 1 >= 0) {
			min ? (time[0] -= 1) : (time[0] += 1);
			lessSec += 60;
		} else return [0, 0];
	}
	time[1] += lessSec;
	if (time[0] > 60 || (time[0] > 60 && time[1] > 0)) return [60, 0];
	return time;
}
const initialeState: clock = {
	breakTime: {
		directTime: [5, 0],
		controlTime: 5,
	},
	time: {
		directTime: [25, 0],
		controlTime: 25,
	},
};

export const reducer = (
	state: clock = initialeState,
	action: actionTime | actionController
): clock => {
	switch (action.type) {
		case RESET:
			return {
				breakTime: {
					directTime: [5, 0],
					controlTime: 5,
				},
				time: {
					directTime: [25, 0],
					controlTime: 25,
				},
			};
		case DOWNTIME:
			return {
				...state,
				time: {
					...state.time,
					controlTime: setControl(state.time.controlTime, action.up),
				},
			};
		case DOWNBREAK:
			return {
				...state,
				breakTime: {
					...state.breakTime,
					controlTime: setControl(state.breakTime.controlTime, action.up),
				},
			};
		case DOWNBREAKSEC:
			return {
				...state,
				breakTime: {
					...state.breakTime,
					directTime: [
						...setTimeMinus(
							state.breakTime.directTime,
							action.sec,
							action.up
						),
					],
				},
			};
		case DOWNTIMESEC:
			return {
				...state,
				time: {
					...state.time,
					directTime: [
						...setTimeMinus(state.time.directTime, action.sec, action.up),
					],
				},
			};
		case SETTIMESEC:
			console.log(state);
			return {
				...state,
				time: {
					...state.time,
					directTime: [...action.set],
				},
			};
		case SETBREAKSEC:
			return {
				...state,
				breakTime: {
					...state.breakTime,
					directTime: [...action.set],
				},
			};
		default:
			return state;
	}
};
