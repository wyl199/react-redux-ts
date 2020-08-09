const initialState = {
    name: 'L Learn React',
    data: 'WOW'
};

export const homeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case "EXAMPLE":
            return { ...state, name: action.payload }

        default:
            return state;
    }
}