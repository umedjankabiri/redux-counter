import {FC} from "react";
import {EnterValueProps} from "common/types/EnterValue/EnterValueProps.ts";

export const EnterValue: FC<EnterValueProps> = (props) => {
    const onChangeHandler = () => props.onChange

    return (
        <input className={props.className} type="number" onChange={onChangeHandler}/>
    )
}
