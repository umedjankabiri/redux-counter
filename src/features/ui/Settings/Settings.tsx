import {FC} from "react";
import {SettingsProps} from "common/types/Settings/SettingsProps.ts";
import stl from "./Settings.module.css"
import {EnterValue} from "common/components/EnterValue/EnterValue.tsx";
import {Button} from "common/components/Button/Button.tsx";

export const Settings: FC<SettingsProps> = () => {
    let defaultValue = 0

    return (
        <div className={stl.settingsWrapper}>
            <div className={stl.values}>
                <div className={stl.maxValue}>
                    <span>Enter max value: </span>
                    <EnterValue className={stl.enterValue} value={defaultValue} onChange={() => {}}/>
                </div>
                <div className={stl.startValue}>
                    <span>Enter start value: </span>
                    <EnterValue className={stl.enterValue} value={defaultValue} onChange={() => {}}/>
                </div>
            </div>
            <div className={stl.buttonsWrapper}>
                <Button className={stl.enter}>Enter</Button>
                <Button className={stl.clear}>Reset</Button>
            </div>
        </div>
    )
}
