import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Preducer from '../reducer/preducer'


export default () => {
    const store = createStore(
        combineReducers({
            performance:Preducer
        }),
        applyMiddleware(thunk)
    )
    return store
}