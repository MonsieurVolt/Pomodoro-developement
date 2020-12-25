import { DOWNBREAK, DOWNTIME } from "./store/constants";

interface InsideClock {
	directTime: number[];
	controlTime: number;
}
interface clock {
	breakTime: InsideClock;
	time: InsideClock;
}
interface Reset {
	type: string;
}
interface actionTime {
	type: string;
	sec: number;
	up: boolean;
	set: number[];
}
interface actionController {
	type: typeof DOWNBREAK | typeof DOWNTIME;
	up: bollean;
}
