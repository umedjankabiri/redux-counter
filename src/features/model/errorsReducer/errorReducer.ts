import {ErrorProps} from "common/types/ErrorReducer/ErrorProps.ts";
import {ErrorActionProps} from "common/types/ErrorReducer/ErrorActionProps.ts";

const initialErrorState: ErrorProps = {
    error: null
}

export const errorReducer = (state: ErrorProps = initialErrorState, action: ErrorActionProps): ErrorProps => {
    switch (action.type) {
        case "SET-ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        case "CLEAR-ERROR":
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const setErrorAC = (error: string)=>
    ({type: "SET-ERROR", payload: {error: error}}) as const
export const clearErrorAC = ()=>
    ({type: "CLEAR-ERROR"}) as const
