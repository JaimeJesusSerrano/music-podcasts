import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import ExamplesReducer from './examples'

const rootReducer = combineReducers({
  exercises: ExamplesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
