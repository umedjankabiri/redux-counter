import {ChangeEvent, FC} from "react";
import stl from "./Settings.module.css"
import {EnterValue} from "common/components/EnterValue/EnterValue.tsx";
import {Button} from "common/components/Button/Button.tsx";
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectError, selectMessage, selectSettings} from "common/selectors/selectors.ts";
import {useRootDispatch} from "common/hooks/useRootDispatch.ts";
import {setMaxValueAC, resetValueAC, setStartValueAC} from "features/model/settingsReducer/settingsReducer.ts";
import {clearCounterAC} from "features/model/counterReducer/counterReducer.ts";
import {useNavigate} from "react-router-dom";
import {PATH} from "common/utils/path.ts";
import {setMessageAC} from "features/model/messagesReducer/messageReducer.ts";
import {clearErrorAC, setErrorAC} from "features/model/errorsReducer/errorReducer.ts";

export const Settings: FC = () => {
    const {startValue, maxValue} = useRootSelector(selectSettings)
    const {error} = useRootSelector(selectError)
    const {message} = useRootSelector(selectMessage)
    const dispatch = useRootDispatch()
    const navigate = useNavigate()

    const zero = 0;
    const minusOne = -1;

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempMaxValue = +event.currentTarget.value
        if (tempMaxValue)
            dispatch(setMessageAC(`Input max value and press 'Enter'`))
        if (tempMaxValue == minusOne)
            dispatch(setErrorAC(`max value cannot be less then ${zero}`))
        else if (tempMaxValue == startValue)
            dispatch(setErrorAC(`max value cannot be equal to start value`))
        else if (tempMaxValue < startValue)
            dispatch(setErrorAC(`max value cannot be less then start value`))
        else if (startValue < zero && tempMaxValue > zero) {
            dispatch(clearErrorAC())
            dispatch(setStartValueAC(zero))
        }
        else
            dispatch(clearErrorAC())

        dispatch(setMaxValueAC(tempMaxValue))
    }
    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempStartValue = +event.currentTarget.value
        if (tempStartValue)
            dispatch(setMessageAC(`Input max value and press 'Enter'`))
        if (tempStartValue == minusOne)
            dispatch(setErrorAC(`start value cannot be less then ${zero}`))
        else if (tempStartValue == maxValue)
            dispatch(setErrorAC(`start value cannot be equal to max value`))
        else if (tempStartValue > maxValue)
            dispatch(setErrorAC(`start value cannot be greater then max value`))
        else
            dispatch(clearErrorAC())

        dispatch(setStartValueAC(tempStartValue))
    }
    const onClickEnterHandler = () => {
        dispatch(setMaxValueAC(maxValue))
        dispatch(setStartValueAC(startValue))
        navigate(PATH.COUNTER)
    }
    const onClickResetHandler = () => {
        dispatch(resetValueAC(zero))
        dispatch(clearCounterAC(zero))
        dispatch(clearErrorAC())
    }

    const errorMessageStyles = !!error ? stl.error : stl.message
    const disableEnter = startValue == zero && maxValue == zero
    const disableReset = startValue == zero && maxValue == zero

    return (
        <div className={stl.settingsWrapper}>
            <div className={stl.errorMessageWrapper}>
                <span className={errorMessageStyles}>{error || message}</span>
            </div>
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
                <Button className={stl.enter} onClick={onClickEnterHandler} disabled={disableEnter}>Enter</Button>
                <Button className={stl.clear} onClick={onClickResetHandler} disabled={disableReset}>Reset</Button>
            </div>
        </div>
    )
}
