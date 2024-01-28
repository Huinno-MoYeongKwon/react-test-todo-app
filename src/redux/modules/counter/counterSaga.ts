import { put, takeEvery } from "redux-saga/effects";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* prepareIncrement() {
  try {
    console.log("prepareIncrement");
    // yield call(delay, 1000);
    yield delay(1000);
    yield put({ type: "counter/increment" });
  } catch (e) {
    console.log(e);
  }
}

function* counterSaga() {
  yield takeEvery("counter/increment_async", prepareIncrement);
}

export default counterSaga;
