import {FC} from "react";
import stl from "./Counter.module.css"
import {useRootSelector} from "common/hooks/useRootSelector.ts";
import {selectCounter} from "common/selectors/counterSelectors.ts";
import {Display} from "common/components/Display/Display.tsx";

export const Counter: FC = () => {
    const {counter} = useRootSelector(selectCounter)

    return (
        <div className={stl.counterWrapper}>
            <div className={stl.displayWrapper}>
                <Display className={""}>{ counter }</Display>
            </div>
        </div>
    )
}
