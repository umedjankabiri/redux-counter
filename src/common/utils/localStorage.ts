import {RootState} from "App/store.ts";

export const loadState = (): any => {
    try {
        const storedCounter = localStorage.getItem('counter');
        const storedStartValue = localStorage.getItem('startValue');
        const storedMaxValue = localStorage.getItem('maxValue');

        return {
            counter: {
                counter: storedCounter !== null ? JSON.parse(storedCounter) : 0
            },
            settings: {
                startValue: storedStartValue !== null ? JSON.parse(storedStartValue) : 0,
                maxValue: storedMaxValue !== null ? JSON.parse(storedMaxValue) : 0,
            },
            error: { error: null },
            messages: { message: "" }
        };
    } catch (error) {
        return {
            counter: { counter: 0 },
            settings: { startValue: 0, maxValue: 0 },
            error: { error: null },
            messages: { message: "" },
        };
    }
};

export const saveState = (state: RootState) => {
    try {
        localStorage.setItem('counter', JSON.stringify(state.counter?.counter));
        localStorage.setItem('startValue', JSON.stringify(state.settings?.startValue));
        localStorage.setItem('maxValue', JSON.stringify(state.settings?.maxValue));
    } catch (error) {
        console.error("Could not save state", error);
    }
};
