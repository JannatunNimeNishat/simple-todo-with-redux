import { ADD, CLEARALL, COMPLETEALL, TODOCOLORCHANGE, TODO_COMPLETE_INCOMPLETE_TOGGLE } from "./actionType";
import { initalState } from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reducer((maxId, todo) => Math.max(todo.id, maxId), -1);
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

        case CLEARALL:
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
    
        default:
            return state;
    }
}

export default reducer;