import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  dashboard: (state) => Object.assign({}, state)
})

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    devToolsEnhancer()
  )

  //   if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept('../reducers', () => {
  //       const nextRootReducer = require('../reducers').default
  //       store.replaceReducer(nextRootReducer)
  //     })
  //   }

  return store
}

export default configureStore
