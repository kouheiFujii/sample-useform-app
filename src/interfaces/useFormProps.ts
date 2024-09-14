import { SubmitHandler, FieldValues } from "react-hook-form";
import { Resolver } from "react-hook-form";

export interface UseFormProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  resolver: Resolver<T>;
}
