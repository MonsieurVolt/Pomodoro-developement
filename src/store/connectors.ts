import { Dispatch } from "react";
import { actionTime, clock, Reset } from "../types";
import {
	downBreak,
	downTime,
	reset,
	downTimeSec,
	downBreakSec,
	setBreakSec,
	setTimeSec,
} from "./actionsCreator";

export const mapStateToProps = (state: clock) => {
	return {
		timeSec: state.time.directTime,
		controlTime: state.time.controlTime,
		breakSec: state.breakTime.directTime,
		controlBreak: state.breakTime.controlTime,
	};
};
export const mapDispatchToProps = (dispatch: Dispatch<actionTime | Reset>) => ({
	reset: () => dispatch(reset()),
	downTimeSec: (secondes: number, up: boolean) =>
		dispatch(downTimeSec(secondes, up)),
	downTime: (up: boolean) => dispatch(downTime(up)),
	downBreak: (up: boolean) => dispatch(downBreak(up)),
	downBreakSec: (secondes: number, up: boolean) =>
		dispatch(downBreakSec(secondes, up)),
	setBreakSec: (set: number) => dispatch(setBreakSec(set)),
	setTimeSec: (set: number) => dispatch(setTimeSec(set)),
});
