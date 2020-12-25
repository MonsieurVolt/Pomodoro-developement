import React from "react";
import { ReactComponent as ArrowUp } from "./assets/arrow_up.svg";
import { ReactComponent as ArrowDown } from "./assets/arrow_down.svg";
interface Props {
	count: number;
	handleChange: (up: boolean) => void;
	name: string;
}
const Controllers: React.FC<Props> = ({
	count,
	handleChange,
	children,
	name,
}) => {
	return (
		<div id={name}>
			<>{children}</>
			<div className="arrow">
				<button id={name + "-increment"} onClick={() => handleChange(true)}>
					<ArrowUp />
				</button>
				<p id={name + "-length"}>{count}</p>
				<button
					onClick={() => handleChange(false)}
					id={name + "-decrement"}
				>
					<ArrowDown />
				</button>
			</div>
		</div>
	);
};
export default Controllers;
