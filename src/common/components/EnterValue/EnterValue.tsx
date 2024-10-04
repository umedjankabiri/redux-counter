import {FC} from "react";
import {EnterValueProps} from "common/types/EnterValue/EnterValueProps.ts";

export const EnterValue: FC<EnterValueProps> = (props) => {

    return (
        <input className={props.className} type="number" value={props.value} onChange={props.onChange}/>
    )
}
