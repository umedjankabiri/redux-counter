import {CounterProps} from "common/types/CounterReducer/CounterProps.ts";
import {ActionProps} from "common/types/CounterReducer/ActionProps.ts";

const initialState: CounterProps = {
    counter: 0,
    startValue: 0,
    maxValue: 0
}

export const counterReducer = (state: CounterProps = initialState, action: ActionProps): CounterProps => {
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
        case "START-VALUE":
            return {
                ...state,
                startValue: action.payload.startValue
            }
        case "MAX-VALUE":
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        default:
            return state
    }
}

export const incrementCounter = (counter: number) =>
    ({type: "INCREMENT", payload: {counter: counter}}) as const
export const decrementCounter = (counter: number) =>
    ({type: "DECREMENT", payload: {counter: counter}}) as const
export const startValue = (startValue: number) =>
    ({type: "START-VALUE", payload: {startValue: startValue}}) as const
export const maxValue = (maxValue: number) =>
    ({type: "MAX-VALUE", payload: {maxValue: maxValue}}) as const
