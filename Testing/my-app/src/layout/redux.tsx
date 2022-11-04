import React, { useContext } from "react";
import { Dispatch } from "redux";
import { useAppSelector } from "../Redux/store/hooks";
import { shallowEqual, useSelector } from "react-redux";
import { store } from "../Redux/store/store";
const Component = (props: any) => {
  const getCounter = store.getState();
  console.log(getCounter);
  return (
    <div>
      <h1>Redux </h1>
      <div className="bordered">{Number(getCounter.counter.counter)}</div>
    </div>
  );
};

export default Component;
