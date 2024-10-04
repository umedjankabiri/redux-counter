import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "features/model/counterReducer/counterReducer.ts";
import {settingsReducer} from "features/model/settingsReducer/settingsReducer.ts";
import {errorReducer} from "features/model/errorsReducer/errorReducer.ts";
import {messageReducer} from "features/model/messagesReducer/messageReducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
    error: errorReducer,
    messages: messageReducer
})
export const store = legacy_createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
