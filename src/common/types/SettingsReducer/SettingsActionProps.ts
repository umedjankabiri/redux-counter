import {maxValueAC, resetValueAC, startValueAC} from "features/model/settingsReducer/settingsReducer.ts";

type StartValueActionProps = ReturnType<typeof startValueAC>;
type MaxValueActionProps = ReturnType<typeof maxValueAC>;
type ResetValuesActionProps = ReturnType<typeof resetValueAC>;
export type SettingsActionProps = | StartValueActionProps
    | MaxValueActionProps
    | ResetValuesActionProps

