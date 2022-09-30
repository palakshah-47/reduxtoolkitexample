import React from "react";
// import { useFormAPI, useFormName } from "../form-api";
import { updateName } from "../stateSlice";
import { useDispatch, useSelector } from "react-redux";

export const NameFormComponent = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name);
  // const name = useFormName();
  // const { onNameChange } = useFormAPI();
  console.info("NameFormComponent render");
  console.info(name);

  const onValueChange = (e) => {
    dispatch(updateName(e.target.value));
    // onNameChange(e.target.value);
  };

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={name} />
    </div>
  );
};
