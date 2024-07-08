import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Slices/CountSlice";

const Count = () => {
  const dispatch = useDispatch();

  const count1 = useSelector((data) => data.count.count);          // data.store.initialvalue
  console.log(count1);

  return (
    <div>
      Count Component
      <button onClick={() => dispatch(decrement("jvvhgv"))}> - </button>
      <h1>{count1}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
};

export default Count;
