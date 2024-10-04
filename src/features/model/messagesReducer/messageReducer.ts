import {MessagesProps} from "common/types/MessageReducer/MessagesProps.ts";
import {MessageActionProps} from "common/types/MessageReducer/MessageActionProps.ts";

const initialMessagesState: MessagesProps = {
    message: null
}

export const messageReducer = (state: MessagesProps = initialMessagesState, action: MessageActionProps): MessagesProps => {
    switch (action.type) {
        case "SET-MESSAGE":
            return {
                ...state,
                message: action.payload.message
            }
        case "CLEAR-MESSAGE":
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
}

export const setMessageAC = (message: string) =>
    ({type: "SET-MESSAGE", payload: {message: message}}) as const
export const clearMessageAC = () =>
    ({type: "CLEAR-MESSAGE"}) as const
