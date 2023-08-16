import { ADD,  CLEARCOMPLETED,  COMPLETEALL, TODOCOLORCHANGE, TODODELETE,  TODO_COMPLETE_INCOMPLETE_TOGGLE } from "./actionType"

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

export const clearCompleted = () =>{
    return {
        type: CLEARCOMPLETED,
    }
};


export const todoCompleteIncompleteToggle = (id) =>{
    return {
        type:TODO_COMPLETE_INCOMPLETE_TOGGLE,
        payload:id,
    }
};

export const todoColorChange = (id,color) =>{
    return {
        type:TODOCOLORCHANGE,
        payload:{id,color},
    }
};

export const todoDelete = (id) =>{
    return {
        type:TODODELETE,
        payload:id,
    }
};




