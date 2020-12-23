import { DOWNTIME, RESET, UPTIME } from "./constants";

function setTimeMinus(time: clock, minusSec: number, min: boolean): clock {
	let lessSec = time[1] - minusSec;
	time[1] = 0;
	while (lessSec < 0) {
		if (time[0] - 1 >= 0) {
			min ? (time[0] -= 1) : (time[0] += 1);
			lessSec += 60;
		} else return [0, 0];
	}
	time[1] += lessSec;
	return time;
}

export const reducer = (state: clock = [25, 0], action: action) => {
	console.log(state);
	switch (action.type) {
		case RESET:
			return [25, 0];
		case DOWNTIME:
			return [...setTimeMinus(state, action.sec, true)];
		case UPTIME:
			return [...setTimeMinus(state, action.sec, false)];
		default:
			return state;
	}
};
