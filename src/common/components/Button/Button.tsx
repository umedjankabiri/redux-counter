import {FC} from "react";
import {ButtonProps} from "common/types/Button/ButtonProps.ts";

export const Button: FC<ButtonProps> = (props) => {
    const onClickHandler = () => props.onClick && props.onClick()

    return (
        <button className={props.className} disabled={props.disabled} onClick={onClickHandler}>{props.children}</button>
    )
}
