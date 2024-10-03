import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "features/model/counterReducer/counterReducer.ts";
import {settingsReducer} from "features/model/settingsReducer/settingsReducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
})
export const store = legacy_createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
