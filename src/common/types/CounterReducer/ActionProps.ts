import {
    clearCounter,
    decrementCounter,
    incrementCounter,
    maxValue,
    startValue
} from "features/model/counterReducer/counterReducer.ts";

type IncrementCounterActionProps = ReturnType<typeof incrementCounter>;
type DecrementCounterActionProps = ReturnType<typeof decrementCounter>;
type StartValueActionProps = ReturnType<typeof startValue>;
type MaxValueActionProps = ReturnType<typeof maxValue>;
type ClearCounterActionProps = ReturnType<typeof clearCounter>;
export type ActionProps = IncrementCounterActionProps
    | DecrementCounterActionProps
    | StartValueActionProps
    | MaxValueActionProps
    | ClearCounterActionProps
