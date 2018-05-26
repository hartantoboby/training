import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, thunk, reduxImmutableStateInvariant())
    )
  );

  initSagas(sagaMiddleware);

  return store;
}
