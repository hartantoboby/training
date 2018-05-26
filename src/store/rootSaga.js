import blog from "./blog/sagas";
const sagas = [blog];
export const initSagas = sagaMiddleware =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
