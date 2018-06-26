
const initialState = {
    todos: [],
    id: 0
}
const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.data}
        case 'ADD_TODO':
            let newState = {...state};
            newState.id++;
            return {...newState, todos: [...newState.todos, {task: action.task, id: newState.id}]}
        case 'REMOVE_TODO':
            newState =  state.todos.filter((todo) => todo.id != action.id);
            return {todos:[...newState], id: state.id}
        default:
            return state;
            
    }
}
export default rootReducer