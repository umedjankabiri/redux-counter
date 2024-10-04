import {ChangeEvent, FC} from "react";
import stl from "./Settings.module.css"
import {EnterValue} from "common/components/EnterValue/EnterValue.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectSettings} from "common/selectors/selectors.ts";
import {useRootDispatch} from "common/hooks/useRootDispatch.ts";
import {maxValueAC, resetValueAC, startValueAC} from "features/model/settingsReducer/settingsReducer.ts";
import {clearCounterAC} from "features/model/counterReducer/counterReducer.ts";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/utils/path.ts";

export const Settings: FC = () => {
    const {startValue, maxValue} = useRootSelector(selectSettings)
    const dispatch = useRootDispatch()
    const navigate = useNavigate()

    const zero = 0

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempMaxValue = +event.currentTarget.value

        dispatch(maxValueAC(tempMaxValue))
    }
    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempStartValue = +event.currentTarget.value

        dispatch(startValueAC(tempStartValue))
    }
    const onClickEnterHandler = () => {
        dispatch(maxValueAC(maxValue))
        dispatch(startValueAC(startValue))
        navigate(PATH.COUNTER)
    }
    const onClickResetHandler = () => {
        dispatch(resetValueAC(zero))
        dispatch(clearCounterAC(zero))
    }

    return (
        <div className={stl.settingsWrapper}>
            <div className={stl.valuesWrapper}>
                <div className={stl.maxValue}>
                    <span>Enter max value: </span>
                    <EnterValue className={stl.enterValue} value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={stl.startValue}>
                    <span>Enter start value: </span>
                    <EnterValue className={stl.enterValue} value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
            </div>
            <div className={stl.buttonsWrapper}>
                <Button className={stl.enter} onClick={onClickEnterHandler}>Enter</Button>
                <Button className={stl.clear} onClick={onClickResetHandler}>Reset</Button>
            </div>
        </div>
    )
}
