import React from "react";
import { Provider } from "react-redux";
import Pomo from "./pomo";
import { store } from "../store";

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Pomo />
			</Provider>
		);
	}
}
export default App;
