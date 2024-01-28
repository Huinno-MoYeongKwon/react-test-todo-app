import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, selectCount } from "./features/counter/counterSlice";

import { display, dismiss, alertFlag } from "./features/alert/alertDuck";

import Alert from "./app/components/Alert";

import Download from "./app/components/Download";

function App() {
  const count = useSelector(selectCount);
  const isAlertVisible = useSelector(alertFlag);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Download />
      <h1>현재 숫자: {count}</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <button
        onClick={() =>
          //saga 미들웨어를 통해 비동기 처리
          dispatch({
            type: "counter/increment_async",
          })
        }
      >
        증가
      </button>
      <button
        onClick={() =>
          // 미들웨어 없이 동기 처리
          dispatch(decrement())
        }
      >
        감소
      </button>

      <button
        onClick={() => {
          dispatch(display());
        }}
      >
        Alert 보이기
      </button>
      <button
        onClick={() => {
          dispatch(dismiss());
        }}
      >
        Alert 숨기기
      </button>

      <Alert message="안녕하세요" open={isAlertVisible}></Alert>
      {count % 100 === 0 && <p>{count} 번 누르셨습니다.</p>}
    </div>
  );
}

export default App;
