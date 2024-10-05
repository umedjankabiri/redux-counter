import {FC} from "react";
import stl from "./Counter.module.css"
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectCounter, selectSettings} from "common/selectors/selectors.ts";
import {Display} from "common/components/Display/Display.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {useRootDispatch} from "common/hooks/useRootDispatch.ts";
import {
    clearCounterAC,
    setDecrementCounterAC,
    setIncrementCounterAC
} from "features/model/counterReducer/counterReducer.ts";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/utils/path.ts";

export const Counter: FC = () => {
    const zero = 0

    const {counter} = useRootSelector(selectCounter)
    const {startValue, maxValue} = useRootSelector(selectSettings)
    const dispatch = useRootDispatch()
    const navigate = useNavigate()

    const onClickPlusHandler = () =>
        dispatch(setIncrementCounterAC(counter))
    const onClickMinusHandler = () =>
        dispatch(setDecrementCounterAC(counter))
    const onClickClearHandler = () =>
        dispatch(clearCounterAC(startValue))
    const backHandler = () => navigate(PATH.SETTINGS)

    const displayStyles = counter !== zero && counter == maxValue ? stl.lastRedDigit : stl.display
    const disablePlus = maxValue == counter
    const disableMinus = counter == startValue
    const disableClear = counter == startValue

    return (
        <div className={stl.counterWrapper}>
            <div className={stl.displayWrapper}>
                <Display className={displayStyles}>{counter}</Display>
            </div>
            <div className={stl.buttonsWrapper}>
                <Button className={stl.plus} onClick={onClickPlusHandler} disabled={disablePlus}>Plus</Button>
                <Button className={stl.minus} onClick={onClickMinusHandler} disabled={disableMinus}>Minus</Button>
                <Button className={stl.clear} onClick={onClickClearHandler} disabled={disableClear}>Clear</Button>
            </div>
            <div>
                <Button className={stl.back} onClick={backHandler}>Settings</Button>
            </div>
        </div>
    )
}
