import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, selectCount } from "../../features/counter/counterSlice";

function CounterArea() {
  //   const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "counter/increment_async",
          })
        }
      >
        증가
      </button>
      <button onClick={() => dispatch(decrement())}> 감소</button>
    </>
  );
}

export default CounterArea;
