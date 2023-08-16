import { STATUS,COLORS } from "./actionTypes"

export const status = (value) =>{
    return {
        type:STATUS,
        payload:value,
    }
}

export const colors = (color,changeType) =>{
    return {
        type:COLORS,
        payload:{color, changeType},
    }
}