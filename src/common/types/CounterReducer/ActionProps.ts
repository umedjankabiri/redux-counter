import {decrementCounter, incrementCounter} from "features/model/counterReducer/counterReducer.ts";

type IncrementCounterActionProps = ReturnType<typeof incrementCounter>;
type DecrementCounterActionProps = ReturnType<typeof decrementCounter>;
export type ActionProps = IncrementCounterActionProps | DecrementCounterActionProps
