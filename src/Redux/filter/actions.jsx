import { STATUS,COLORS } from "./actionTypes"

export const changeStatus = (value) =>{
    return {
        type:STATUS,
        payload:value,
    }
}

export const changeColors = (color,changeType) =>{
    return {
        type:COLORS,
        payload:{color, changeType},
    }
}