import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

const store = createStore((state = {}, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateCountry":
      return { ...state, country: action.payload };
    case "updateDiscount":
      return { ...state, discount: action.payload };
    default:
      return state;
  }
});

export const FormDataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const useFormDiscount = () => {
  return useSelector((state) => state.discount);
};

export const useFormCountry = () => {
  return useSelector((state) => state.country);
};

export const useFormName = () => {
  return useSelector((state) => state.name);
};

export const useFormAPI = () => {
  const dispatch = useDispatch();

  return {
    onCountryChange: (value) => {
      dispatch({ type: "updateCountry", payload: value });
    },
    onDiscountChange: (value) =>
      dispatch({ type: "updateDiscount", payload: value }),
    onNameChange: (value) => dispatch({ type: "updateName", payload: value }),
    onSave: () => {}
  };
};
