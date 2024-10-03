import {FC} from "react";
import {DisplayProps} from "common/types/Display/DisplayProps.ts";

export const Display: FC<DisplayProps>= (props) => {

    return (
        <h3 className={props.className}>{props.children}</h3>
    )
}
