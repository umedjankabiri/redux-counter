import {ReactNode} from "react";

export type ButtonProps = {
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    children: ReactNode;
}
