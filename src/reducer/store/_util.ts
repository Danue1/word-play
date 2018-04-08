import { Action } from 'redux'
import { Map } from 'immutable'

type State = Map<string, any>

export interface IHandler<IAction = null> {
  [key: string]: (state: State, action: IAction & Action) => State | void
}

export const createReducer =
  <State, Handler> (initialState: State, handler: Handler) =>
    // switcher
    <IAction> (state = initialState, action: IAction & Action): State =>
      (handler.hasOwnProperty(action.type))
        ? (handler[action.type](state, action)) || state
        : state
