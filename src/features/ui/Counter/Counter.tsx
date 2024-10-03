import {FC} from "react";
import stl from "./Counter.module.css"
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectCounter} from "common/selectors/selectors.ts";
import {Display} from "common/components/Display/Display.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {useRootDispatch} from "common/hooks/useRootDispatch.ts";
import {clearCounter, decrementCounter, incrementCounter} from "features/model/counterReducer/counterReducer.ts";

export const Counter: FC = () => {
    const {counter} = useRootSelector(selectCounter)
    const dispatch = useRootDispatch()

    const handlePlusClick = () =>
        dispatch(incrementCounter(counter))
    const handleMinusClick = () =>
        dispatch(decrementCounter(counter))
    const handleClearClick = () =>
        dispatch(clearCounter(counter))

    return (
        <div className={stl.counterWrapper}>
            <div className={stl.displayWrapper}>
                <Display className={stl.display}>{counter}</Display>
            </div>
            <div className={stl.buttonsWrapper}>
                <Button className={stl.plus} onClick={handlePlusClick}>Plus</Button>
                <Button className={stl.minus} onClick={handleMinusClick}>Minus</Button>
                <Button className={stl.clear} onClick={handleClearClick}>Clear</Button>
            </div>
        </div>
    )
}
