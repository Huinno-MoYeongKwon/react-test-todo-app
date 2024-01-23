import { all } from "redux-saga/effects";
import counterSaga from "./modules/counter/counterSaga";

export function* helloSaga() {
  yield console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield all([counterSaga(), helloSaga()]);
}
