import {setMaxValueAC, resetValueAC, setStartValueAC} from "features/model/settingsReducer/settingsReducer.ts";

type StartValueActionProps = ReturnType<typeof setStartValueAC>;
type MaxValueActionProps = ReturnType<typeof setMaxValueAC>;
type ResetValuesActionProps = ReturnType<typeof resetValueAC>;
export type SettingsActionProps = | StartValueActionProps
    | MaxValueActionProps
    | ResetValuesActionProps
