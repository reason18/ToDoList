import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import { loadState, saveState } from "./local-storage/localStorage";

const persistedstate = loadState();

const middleware = applyMiddleware(logger);
export const store = createStore(reducer, persistedstate);

store.subscribe(() => {
  saveState(store.getState());
});

export * from "./actions";
export * from "./reducers";
