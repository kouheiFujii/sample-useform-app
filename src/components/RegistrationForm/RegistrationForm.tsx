// src/components/RegistrationForm/RegistrationForm.tsx
import React from "react";
import { RegistrationFormProps } from "./RegistrationForm.types";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { registrationSchema } from "../../validation/registrationSchema";
import { RegistrationFormData } from "../../interfaces/registrationInterfaces";
import { yupResolver } from "@hookform/resolvers/yup";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<RegistrationFormData>({
    onSubmit,
    resolver: yupResolver(registrationSchema),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="ユーザー名"
        name="username"
        register={register}
        error={errors.username?.message}
      />
      <Input
        label="パスワード"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        label="パスワード確認"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Input
        label="メール"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <button type="submit">登録</button>
    </form>
  );
};

export default RegistrationForm;
