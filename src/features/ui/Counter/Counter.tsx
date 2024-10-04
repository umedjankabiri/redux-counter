import {FC} from "react";
import stl from "./Counter.module.css"
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectCounter, selectSettings} from "common/selectors/selectors.ts";
import {Display} from "common/components/Display/Display.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {useRootDispatch} from "common/hooks/useRootDispatch.ts";
import {clearCounterAC, decrementCounterAC, incrementCounterAC} from "features/model/counterReducer/counterReducer.ts";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/utils/path.ts";

export const Counter: FC = () => {
    const {counter} = useRootSelector(selectCounter)
    const {startValue, maxValue} = useRootSelector(selectSettings)
    const dispatch = useRootDispatch()
    const navigate = useNavigate()

    const handlePlusClick = () =>
        dispatch(incrementCounterAC(counter))
    const handleMinusClick = () =>
        dispatch(decrementCounterAC(counter))
    const handleClearClick = () =>
        dispatch(clearCounterAC(startValue))
    const backHandler = () => navigate(PATH.SETTINGS)

    const disablePlus = maxValue == counter
    const disableMinus = counter == startValue
    const disableClear = counter == startValue

    return (
        <div className={stl.counterWrapper}>
            <div className={stl.displayWrapper}>
                <Display className={stl.display}>{counter}</Display>
            </div>
            <div className={stl.buttonsWrapper}>
                <Button className={stl.plus} onClick={handlePlusClick} disabled={disablePlus}>Plus</Button>
                <Button className={stl.minus} onClick={handleMinusClick} disabled={disableMinus}>Minus</Button>
                <Button className={stl.clear} onClick={handleClearClick} disabled={disableClear}>Clear</Button>
            </div>
            <div>
                <Button className={stl.back} onClick={backHandler}>Settings</Button>
            </div>
        </div>
    )
}
