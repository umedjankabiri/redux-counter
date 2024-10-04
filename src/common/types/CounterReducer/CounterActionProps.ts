import {clearCounterAC, decrementCounterAC, incrementCounterAC,} from "features/model/counterReducer/counterReducer.ts";
import {SettingsActionProps} from "common/types/SettingsReducer/SettingsActionProps.ts";

type IncrementCounterActionProps = ReturnType<typeof incrementCounterAC>;
type DecrementCounterActionProps = ReturnType<typeof decrementCounterAC>;
export type ClearCounterActionProps = ReturnType<typeof clearCounterAC>;
export type CounterActionProps = IncrementCounterActionProps
    | DecrementCounterActionProps
    | ClearCounterActionProps
    | SettingsActionProps
