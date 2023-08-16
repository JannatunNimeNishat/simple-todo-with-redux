import { COLORS, STATUS } from "./actionTypes";
import { initalState } from "./initialState";

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case STATUS:
            return {
                ...state,
                status: action.payload,
            }

        case COLORS:
            const { color, changeType } = action.type;
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
                        color: state.colors.filter(singleColor => singleColor !== color)
                    }

                default:
                    return state
            }
        default:
            return state;
    }
}

export default reducer;