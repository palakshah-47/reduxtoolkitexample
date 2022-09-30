/** @jsxImportSource @emotion/react */

import React from "react";
import { DraggingBar } from "../dragging-bar-library";
// import { useFormAPI } from "../form-api";
import { updateDiscount } from "../stateSlice";
import { useDispatch, useSelector } from "react-redux";

export const DiscountFormComponent = () => {
  const dispatch = useDispatch();
  // const { discount } = useSelector((state) => state.form);
  // const { onDiscountChange } = useFormAPI();

  const onDiscountChange = (value) => {
    dispatch(updateDiscount(value));
  };
  console.info("DiscountFormComponent render");
  return (
    <div>
      Please select your discount here: <br />
      <DraggingBar onChange={(value) => onDiscountChange(value)} />
    </div>
  );
};
