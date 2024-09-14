import { useForm as useReactHookForm, FieldValues } from "react-hook-form";
import { UseFormProps } from "../interfaces/useFormProps";

export const useForm = <T extends FieldValues>({
  onSubmit,
  resolver,
}: UseFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<T>({
    resolver,
  });

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
