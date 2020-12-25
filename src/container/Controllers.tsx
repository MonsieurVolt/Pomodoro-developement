import React from "react";
import arrowUp from "./assets/arrow_up.svg";
import arrowDown from "./assets/arrow_down.svg";
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
		<div id="session">
			<>{children}</>
			<div>
				<button>
					<img
						src={arrowUp}
						alt="up"
						onClick={() => handleChange(true)}
						id={name + "-increment"}
					/>
				</button>
				<p id={name + "-length"}>{count}</p>
				<button
					onClick={() => handleChange(false)}
					id={name + "-decrement"}
				>
					<img src={arrowDown} alt="down" />
				</button>
			</div>
		</div>
	);
};
export default Controllers;
