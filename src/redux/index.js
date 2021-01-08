import {createStore} from 'redux';
import {reducer} from './reducers'

export const store = createStore(reducer);

export * from './action-types'
export * from './action-creators'