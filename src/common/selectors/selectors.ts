import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {RootState} from "App/store.ts";
import {SettingsProps} from "common/types/SettingsReducer/SettingsProps.ts";

export const selectCounter = (state: RootState): CounterProps => state.counter
export const selectSettings = (state: RootState): SettingsProps => state.settings
