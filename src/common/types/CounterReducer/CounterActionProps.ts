import {
    clearCounter,
    decrementCounter,
    incrementCounter,
    // maxValue,
    // startValue
} from "features/model/counterReducer/counterReducer.ts";

type IncrementCounterActionProps = ReturnType<typeof incrementCounter>;
type DecrementCounterActionProps = ReturnType<typeof decrementCounter>;
type ClearCounterActionProps = ReturnType<typeof clearCounter>;
export type CounterActionProps = IncrementCounterActionProps
    | DecrementCounterActionProps
    // | StartValueActionProps
    // | MaxValueActionProps
    | ClearCounterActionProps
