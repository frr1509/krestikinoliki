import { legacy_createStore } from "redux";
import { appReducer } from "./appReducer";

export const store = legacy_createStore(appReducer);
