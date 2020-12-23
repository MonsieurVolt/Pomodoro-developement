import { Dispatch } from "react";
import { downTime, reset, upTime } from "./actionsCreator";

export const mapStateToProps = (state: clock) => ({ clock: state });
export const mapDispatchToProps = (dispatch: Dispatch<action | Reset>) => ({
	reset: () => dispatch(reset()),
	upTime: (sec: number) => dispatch(upTime(sec)),
	downTime: (sec: number) => dispatch(downTime(sec)),
});
