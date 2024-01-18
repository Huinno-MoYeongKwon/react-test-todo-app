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

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
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
            dispatch({
              type: "counter/increment_async",
            })
          }
        >
          즈응가
        </button>
        <button onClick={() => dispatch(decrement())}> 가암소</button>
      </header>
    </div>
  );
}

export default App;
