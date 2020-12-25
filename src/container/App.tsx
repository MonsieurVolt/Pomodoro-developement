import React from "react";
import { Provider } from "react-redux";
import Pomo from "./Pomo";
import { store } from "../store";
import "./App.css";
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
