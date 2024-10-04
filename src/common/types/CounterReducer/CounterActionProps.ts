import {clearCounterAC, setDecrementCounterAC, setIncrementCounterAC,} from "features/model/counterReducer/counterReducer.ts";
import {SettingsActionProps} from "common/types/SettingsReducer/SettingsActionProps.ts";

type IncrementCounterActionProps = ReturnType<typeof setIncrementCounterAC>;
type DecrementCounterActionProps = ReturnType<typeof setDecrementCounterAC>;
export type ClearCounterActionProps = ReturnType<typeof clearCounterAC>;
export type CounterActionProps = IncrementCounterActionProps
    | DecrementCounterActionProps
    | ClearCounterActionProps
    | SettingsActionProps
