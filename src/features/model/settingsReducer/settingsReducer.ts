import {SettingsProps} from "common/types/SettingsReducer/SettingsProps.ts";
import {SettingsActionProps} from "common/types/SettingsReducer/SettingsActionProps.ts";

const initialSettingsState: SettingsProps = {
    startValue: 0,
    maxValue: 0
}

export const settingsReducer = (state: SettingsProps = initialSettingsState, action: SettingsActionProps): SettingsProps => {
    switch (action.type) {
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
        case "RESET-VALUES":
            return {
                ...state,
                startValue: action.payload.resetValue,
                maxValue: action.payload.resetValue,
            }
        default:
            return state
    }
}

export const setStartValueAC = (startValue: number) =>
    ({type: "START-VALUE", payload: {startValue: startValue}}) as const
export const setMaxValueAC = (maxValue: number) =>
    ({type: "MAX-VALUE", payload: {maxValue: maxValue}}) as const
export const resetValueAC = (resetValue: number) =>
    ({type: "RESET-VALUES", payload: {resetValue: resetValue}}) as const
