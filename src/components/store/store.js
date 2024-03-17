import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension"
import combine from "./combine";
import { thunk } from "redux-thunk";



const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)))

export default store