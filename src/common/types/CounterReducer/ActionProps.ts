import {
    decrementCounter,
    incrementCounter,
    maxValue,
    startValue
} from "features/model/counterReducer/counterReducer.ts";

type IncrementCounterActionProps = ReturnType<typeof incrementCounter>;
type DecrementCounterActionProps = ReturnType<typeof decrementCounter>;
type StartValueActionProps = ReturnType<typeof startValue>;
type MaxValueActionProps = ReturnType<typeof maxValue>;
export type ActionProps = IncrementCounterActionProps
    | DecrementCounterActionProps
    | StartValueActionProps
    | MaxValueActionProps;
