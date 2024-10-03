import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {RootState} from "App/store.ts";

export const selectCounter = (state: RootState): CounterProps => state.counter
