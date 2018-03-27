
export const get_perf = (perform) => {
    return {
        type:'GET_PERF',
        perform
    }
}


export const getperformance = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/per',{
            method:'GET'
        }).then(res => res.json()).then(data => {dispatch(get_perf(data.perform))})
    }
}