import IExample from 'types/api/Example'

export enum Actions {
  DEFAULT = 'DEFAULT',
  SET = 'SET',
}

type IInitStateProps = IExample

interface IReducerAction {
  type: Actions
  payload: IInitStateProps
}

const Reducer = (state: IInitStateProps | null = null, action: IReducerAction) => {
  switch (action.type) {
    case Actions.SET:
      return action.payload

    default:
      return state
  }
}

export default Reducer
