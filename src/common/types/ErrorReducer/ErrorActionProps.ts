import {clearErrorAC, setErrorAC} from "features/model/errorsReducer/errorReducer.ts";

type SetErrorActionProps = ReturnType<typeof setErrorAC>
type ClearErrorActionProps = ReturnType<typeof clearErrorAC>
export type ErrorActionProps = SetErrorActionProps | ClearErrorActionProps;