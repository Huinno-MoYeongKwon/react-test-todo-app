import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./features/counter/counterSlice";

import { display, dismiss, alertFlag } from "./features/alert/alertDuck";

import Alert from "./app/components/Alert";

function App() {
  const count = useSelector(selectCount);
  const isAlertVisible = useSelector(alertFlag);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          const fileLinks = [
            "http://localhost:3000/test1.jpg",
            "http://localhost:3000/test2.jpg",
            "http://localhost:3000/test3.jpg",
          ];

          fileLinks.forEach((fileLink, index) => {
            const link = document.createElement("a");
            link.href = fileLink;
            link.download = index + ".jpg";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();

            setTimeout(() => {
              URL.revokeObjectURL(fileLink);
              link.remove();
            }, 1000);
          });
        }}
      >
        다운로드
      </button>

      <a
        href="http://localhost:3000/test1.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지1
      </a>
      <br></br>

      <a
        href="http://localhost:3000/test2.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지2
      </a>

      <br></br>
      <a
        href="http://localhost:3000/test3.jpg"
        download
        target="_blank"
        rel="noreferrer"
      >
        test 이미지1
      </a>

      {/* <header className="App-header"></header> */}
      <h1>{count}</h1>
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
        즈응가
      </button>
      <button
        onClick={() =>
          // 미들웨어 없이 동기 처리
          dispatch(decrement())
        }
      >
        가암소
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
    </div>
  );
}

export default App;
