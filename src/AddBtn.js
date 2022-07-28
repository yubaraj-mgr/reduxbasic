import React from "react";
import { useDispatch } from "react-redux";
import { increaseCounter } from "./counterSlice";

const AddBtn = ({ setCounter }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseCounter())}> + </button>
    </div>
  );
};

export default AddBtn;
