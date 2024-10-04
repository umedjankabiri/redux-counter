import {ChangeEvent} from "react";

export type EnterValueProps = {
    className?: string
    disabled?: boolean
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    min?: number
    max?: number
}
