import { actionController, actionTime, Reset } from "../types";
import {
	DOWNTIME,
	RESET,
	DOWNBREAKSEC,
	DOWNBREAK,
	DOWNTIMESEC,
	SETTIMESEC,
	SETBREAKSEC,
} from "./constants";

export const reset = (): Reset => ({ type: RESET });
export const downBreakSec = (secondes: number, up: boolean): actionTime => ({
	type: DOWNBREAKSEC,
	sec: secondes,
	up,
	set: [],
});
export const downTime = (up: boolean): actionController => ({
	type: DOWNTIME,
	up,
});
export const downBreak = (up: boolean): actionController => ({
	type: DOWNBREAK,
	up,
});
export const downTimeSec = (secondes: number, up: boolean): actionTime => ({
	type: DOWNTIMESEC,
	sec: secondes,
	up,
	set: [],
});
export const setTimeSec = (set: number): actionTime => ({
	type: SETTIMESEC,
	sec: null,
	up: null,
	set: [set, 0],
});
export const setBreakSec = (set: number): actionTime => ({
	type: SETBREAKSEC,
	sec: null,
	up: null,
	set: [set, 0],
});
