export default (state,action) => {
    switch(action.type){
        case 'GET_TASKS':
            return {
                ...state
            }
        case 'ADD_TASKS':
            return {
                ...state,
                tasks:[...state.tasks, action.task]
            }

        default:
            return state
    }
}