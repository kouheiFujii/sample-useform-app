import React from "react";
import { TextField } from "@mui/material";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ register, name, ...rest }) => {
  return <TextField {...register(name)} name={name} {...rest} />;
};

export default Input;
