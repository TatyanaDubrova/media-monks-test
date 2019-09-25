import { LOGIN, CHECK_LOGIN, LOGOUT } from '../../../constants/actions'

export const checkLogin = () => ({
  type: `${CHECK_LOGIN}`
})

export const login = ({ email }) => ({
  type: `${LOGIN}`,
  email
})

export const logout = () => ({
  type: `${LOGOUT}`
})

