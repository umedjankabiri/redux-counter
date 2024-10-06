import {combineReducers} from "redux";
import {counterReducer} from "features/model/counterReducer/counterReducer.ts";
import {settingsReducer} from "features/model/settingsReducer/settingsReducer.ts";
import {errorReducer} from "features/model/errorsReducer/errorReducer.ts";
import {messageReducer} from "features/model/messagesReducer/messageReducer.ts";
import {loadState, saveState} from "common/utils/localStorage.ts";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
    error: errorReducer,
    messages: messageReducer
})

const preloadedState = loadState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

store.subscribe(() => {
    const state = store.getState()
    saveState({
        counter: state.counter,
        settings: {
            startValue: state.settings.startValue,
            maxValue: state.settings.maxValue
        },
        error: state.error,
        messages: state.messages
    })
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch
