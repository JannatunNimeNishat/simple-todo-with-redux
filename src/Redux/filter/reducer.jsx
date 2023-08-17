import { COLORS, STATUS } from "./actionTypes";
import { initalState } from "./initialState";

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case STATUS:
        //    console.log(action.payload);
            return {
                ...state,
                status: action.payload,
            }

        case COLORS:
            const { color, changeType } = action.payload;
            console.log(color,changeType);
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color,
                        ]
                    }

                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(singleColor => singleColor !== color)
                    }

                default:
                    return state
            }
        default:
            return state;
    }
}

export default reducer;