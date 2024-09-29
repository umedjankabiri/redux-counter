export const counterReducer = (state: any = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: action.payload.counter + 1
            }
            case 'DECREMENT':
                return {
                    ...state,
                    counter: action.payload.counter - 1
                }
    }
}
