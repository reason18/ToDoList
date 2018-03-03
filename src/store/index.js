import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

const middleware = applyMiddleware(logger);
export const store = createStore(reducer, middleware);
export * from "./actions";
export * from "./reducers";
