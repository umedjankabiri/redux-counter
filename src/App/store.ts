import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "features/model/counter-reducer/counterReducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = legacy_createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
