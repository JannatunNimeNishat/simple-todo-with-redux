import { ADD, CLEARALL, COMPLETEALL, TODOCOLORCHANGE, TODODELETE,  TODO_COMPLETE_INCOMPLETE_TOGGLE } from "./actionType"

export  const addTodo = (value) =>{
    return {
        type:ADD,
        payload:value,
    } 
};


export const completeAll = () =>{
    return {
        type: COMPLETEALL,
    }
};

export const clearAll = () =>{
    return {
        type: CLEARALL,
    }
};


export const todoCompleteIncompleteToggle = (id) =>{
    return {
        type:TODO_COMPLETE_INCOMPLETE_TOGGLE,
        payload:id,
    }
};

export const todoColorChange = (value) =>{
    return {
        type:TODOCOLORCHANGE,
        payload:value,
    }
};

export const todoDelete = (id) =>{
    return {
        type:TODODELETE,
        payload:id,
    }
};




