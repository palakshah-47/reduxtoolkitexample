import React from "react";
import { SelectCountry, Country } from "../select-country-library";
// import { useFormAPI, useFormCountry } from "../form-api";
import { useSelector, useDispatch } from "react-redux";
import { updateCountry } from "../stateSlice";

export { Country };

export const SelectCountryFormComponent = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.form.country);

  console.info(country);
  // const { onCountryChange } = useFormAPI();
  // const country = useFormCountry();
  const onCountryChange = (value) => {
    dispatch(updateCountry(value));
  };
  console.info("SelectCountryFormComponent render");

  return (
    <SelectCountry
      onChange={(value) => onCountryChange(value)}
      activeCountry={country}
    />
  );
};
