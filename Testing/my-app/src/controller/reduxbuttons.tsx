import React, { useState } from "react";
import { resetInt, addint, reduceInt } from "../Redux/actions/actions";
import { store } from "../Redux/store/store";
export const Component = (props: any) => {
  const [counter, setCounter] = useState();
  const resetCounter = store.dispatch(resetInt(1));
  const addCounter = store.dispatch(addint(1))
  const reduceCounter = store.dispatch(reduceInt(1))
  return (
    <div>
      <button onClick={() => resetCounter}>Reset</button>
      <button onClick={() => addCounter}>Add 1</button>
      <button onClick={() => reduceCounter}>Reduce 1</button>
    </div>
  );
};

export default Component;
