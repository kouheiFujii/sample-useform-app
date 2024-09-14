import React from "react";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  label,
  register,
  name,
  type = "text",
  error,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name)} type={type} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
