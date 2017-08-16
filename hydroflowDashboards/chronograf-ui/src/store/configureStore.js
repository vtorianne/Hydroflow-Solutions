import {createStore, applyMiddleware, compose} from 'redux'
import {combineReducers} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import errorsMiddleware from 'shared/middleware/errors'
import resizeLayout from 'shared/middleware/resizeLayout'
import statusReducers from 'src/status/reducers'
import sharedReducers from 'shared/reducers'
import dataExplorerReducers from 'src/data_explorer/reducers'
import adminReducer from 'src/admin/reducers/admin'
import rulesReducer from 'src/kapacitor/reducers/rules'
import dashboardUI from 'src/dashboards/reducers/ui'
import persistStateEnhancer from './persistStateEnhancer'

const rootReducer = combineReducers({
  ...statusReducers,
  ...sharedReducers,
  ...dataExplorerReducers,
  admin: adminReducer,
  rules: rulesReducer,
  dashboardUI,
  routing: routerReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState, browserHistory) {
  const routingMiddleware = routerMiddleware(browserHistory)
  const createPersistentStore = composeEnhancers(
    persistStateEnhancer(),
    applyMiddleware(
      thunkMiddleware,
      routingMiddleware,
      errorsMiddleware,
      resizeLayout
    )
  )(createStore)

  // https://github.com/elgerlambert/redux-localstorage/issues/42
  // createPersistantStore should ONLY take reducer and initialState
  // any store enhancers must be added to the compose() function.
  return createPersistentStore(rootReducer, initialState)
}
