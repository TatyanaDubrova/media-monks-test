import { LOGIN, LOGOUT} from '../../../constants/actions'

export const initialState = {
  isLoggedIn: false,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}`:
      return {
        isLoggedIn: true,
        email: action.email
      }
    case `${LOGOUT}`:
      return initialState
    default:
      return state
  }
}
