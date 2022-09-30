import React from "react";
import { Section } from "./section";
import { useFormAPI } from "../form-api";

export const ActionsSection = () => {
  const { onSave } = useFormAPI();
  console.info("ActionsSection render");
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  );
};
