import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {CounterActionProps} from "common/types/CounterReducer/CounterActionProps.ts";

const initialCounterState: CounterProps = {
    counter: 0
}

export const counterReducer = (state: CounterProps = initialCounterState, action: CounterActionProps): CounterProps => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: action.payload.counter + 1
            }
        case "DECREMENT":
            return {
                ...state,
                counter: action.payload.counter - 1
            }
        case "CLEAR-COUNTER":
            return {
                ...state,
                counter: action.payload.clearCounter
            }
        case "START-VALUE":
            return {
                ...state,
                counter: action.payload.startValue
            }
        default:
            return state
    }
}

export const setIncrementCounterAC = (counter: number) =>
    ({type: "INCREMENT", payload: {counter: counter}}) as const
export const setDecrementCounterAC = (counter: number) =>
    ({type: "DECREMENT", payload: {counter: counter}}) as const
export const clearCounterAC = (clearCounter: number) =>
    ({type: "CLEAR-COUNTER", payload: {clearCounter: clearCounter}}) as const
