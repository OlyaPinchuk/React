import {createStore} from "redux";
import {reducer} from "./reducers";

export const store = createStore(reducer)

export * from './action-creators'
export * from './action-types'