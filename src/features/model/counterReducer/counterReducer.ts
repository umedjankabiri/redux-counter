import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {CounterActionProps} from "common/types/CounterReducer/CounterActionProps.ts";

const initialState: CounterProps = {
    counter: 0
}

export const counterReducer = (state: CounterProps = initialState, action: CounterActionProps): CounterProps => {
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
                counter: action.payload.clearCounter = 0
            }
        default:
            return state
    }
}

export const incrementCounter = (counter: number) =>
    ({type: "INCREMENT", payload: {counter: counter}}) as const
export const decrementCounter = (counter: number) =>
    ({type: "DECREMENT", payload: {counter: counter}}) as const
export const clearCounter = (clearCounter: number) =>
    ({type: "CLEAR-COUNTER" as const, payload: {clearCounter: clearCounter}})
