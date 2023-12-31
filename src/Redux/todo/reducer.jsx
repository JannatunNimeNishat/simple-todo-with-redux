import { ADD,  CLEARCOMPLETED,  COMPLETEALL, TODOCOLORCHANGE, TODODELETE, TODO_COMPLETE_INCOMPLETE_TOGGLE } from "./actionType";
import { initalState } from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed:false,
                }
            ]
        case COMPLETEALL:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)
    
        case TODO_COMPLETE_INCOMPLETE_TOGGLE:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }
                else{
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })

        case TODOCOLORCHANGE:
            const {id,color} = action.payload;
            return state.map(todo =>{
                if(todo.id !== id){
                    return todo;
                }
                else{
                    return{
                        ...todo,
                        color: color,
                    }
                }
            })

        case TODODELETE:
            return state.filter(todo => todo.id !== action.payload)
    
        default:
            return state;
    }
}

export default reducer;