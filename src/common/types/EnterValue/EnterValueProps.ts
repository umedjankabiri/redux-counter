export type EnterValueProps = {
    className?: string
    disabled?: boolean
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
}
