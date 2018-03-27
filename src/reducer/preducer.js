const defaultstate = []


export default (state=defaultstate, action) => {
    switch(action.type) {
        case 'GET_PERF':
            return action.perform
        default:
            return state
        }
}