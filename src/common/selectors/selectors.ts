import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {RootState} from "App/store.ts";
import {SettingsProps} from "common/types/SettingsReducer/SettingsProps.ts";
import {ErrorProps} from "common/types/ErrorReducer/ErrorProps.ts";
import {MessagesProps} from "common/types/MessageReducer/MessagesProps.ts";

export const selectCounter = (state: RootState): CounterProps => state.counter
export const selectSettings = (state: RootState): SettingsProps => state.settings
export const selectError = (state: RootState): ErrorProps => state.error
export const selectMessage = (state: RootState): MessagesProps => state.messages
