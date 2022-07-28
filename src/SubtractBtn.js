import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCounter } from "./counterSlice";

const SubtractBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decreaseCounter())}> - </button>
    </div>
  );
};

export default SubtractBtn;
