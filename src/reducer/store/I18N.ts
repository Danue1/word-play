import { Map } from 'immutable'

import { IHandler, createReducer } from './_util'
import * as ACTION_TYPE from '@/reducer/ACTION_TYPE'

const state = Map({
  lang: false
})

interface IAction {
  readonly payload: {
    readonly lang: string
  }
}

const handler: IHandler<IAction> = {
  [ACTION_TYPE.I18N.CHANGE] (state, { payload }) {
    const { lang } = payload
    return state.set('lang', lang)
  }
}

export default createReducer(state, handler)
