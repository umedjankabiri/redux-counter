import {SettingsProps} from "common/types/SettingsReducer/SettingsProps.ts";
import {SettingsActionProps} from "common/types/SettingsReducer/SettingsActionProps.ts";

const initialState: SettingsProps = {
    startValue: 0,
    maxValue: 0
}

export const settingsReducer = (state: SettingsProps = initialState, action: SettingsActionProps): SettingsProps => {
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
    }
}

export const startValue = (startValue: number) =>
    ({type: "START-VALUE", payload: {startValue: startValue}}) as const
export const maxValue = (maxValue: number) =>
    ({type: "MAX-VALUE", payload: {maxValue: maxValue}}) as const