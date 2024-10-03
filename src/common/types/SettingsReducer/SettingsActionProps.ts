import {maxValue, startValue} from "features/model/settingsReducer/settingsReducer.ts";

type StartValueActionProps = ReturnType<typeof startValue>;
type MaxValueActionProps = ReturnType<typeof maxValue>;
export type SettingsActionProps = | StartValueActionProps | MaxValueActionProps
