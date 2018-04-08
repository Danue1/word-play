import { combineReducers } from 'redux'

import I18N from './I18N'

export const reducer = combineReducers({
  I18N
})

type State = Map<any, any>

export interface RootState {
  I18N: State
}
