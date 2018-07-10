import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  headerUpdateLayout: ['id', 'layout'],
  headerUpdateSelected: ['selectedId'],
  headerHide: null
})

export const HeaderTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  layouts: {},
  selectedId: '',
  show: false
})

/* ------------- Reducers ------------- */

export const updateLayout = (state, { id, layout }) =>
  state.setIn(['layouts', id], layout)

export const updateSelected = (state, {selectedId}) =>
  state.merge({selectedId, show: true})

export const hide = (state) => state.merge({ show: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HEADER_UPDATE_LAYOUT]: updateLayout,
  [Types.HEADER_UPDATE_SELECTED]: updateSelected,
  [Types.HEADER_HIDE]: hide
})
