import { createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 100,
});
export const store = createStore(reducer, composeEnhancers());
