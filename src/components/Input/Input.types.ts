import { TextFieldProps } from "@mui/material";

export interface InputProps extends Omit<TextFieldProps, "name"> {
  name: string;
  register: any;
}
