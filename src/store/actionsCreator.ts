import { DOWNTIME, RESET, UPTIME } from "./constants";

export const reset = (): Reset => ({ type: RESET });
export const upTime = (secondes: number): action => ({
	type: UPTIME,
	sec: secondes,
});
export const downTime = (secondes: number): action => ({
	type: DOWNTIME,
	sec: secondes,
});
