import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import commonReducers from './reducers'
import { checkLogin } from './common/actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const history = createBrowserHistory()

export const store = createStore(
  commonReducers(history),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history)
  ))
)

store.dispatch(checkLogin())
