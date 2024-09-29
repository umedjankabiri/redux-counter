import {StateProps} from "common/types/CounterReducer/StateProps.ts";
import {ActionProps} from "common/types/CounterReducer/ActionProps.ts";

const initialState: StateProps = {
    counter: 0
}

export const counterReducer = (state: StateProps = initialState, action: ActionProps): StateProps => {
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
        default:
            return state
    }
}

export const incrementCounter = (counter: number) => ({type: "INCREMENT", payload: {counter: counter}}) as const
export const decrementCounter = (counter: number) => ({type: "DECREMENT", payload: {counter: counter}}) as const
