import {clearMessageAC, setMessageAC} from "features/model/messagesReducer/messageReducer.ts";

type SetMessageActionProps = ReturnType<typeof setMessageAC>
type ClearMessageActionProps = ReturnType<typeof clearMessageAC>
export type MessageActionProps = SetMessageActionProps | ClearMessageActionProps