// src/components/RegistrationForm/RegistrationForm.tsx
import React from "react";
import { RegistrationFormProps } from "./RegistrationForm.types";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { registrationSchema } from "../../validation/registrationSchema";
import { RegistrationFormData } from "../../interfaces/registrationInterfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<RegistrationFormData>({
    onSubmit,
    resolver: yupResolver(registrationSchema),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} sx={{ maxWidth: "20rem" }}>
        <Input
          error={!!errors.username?.message}
          label="ユーザー名"
          name="username"
          register={register}
          helperText={errors.username?.message}
        />
        <Input
          error={!!errors.password?.message}
          label="パスワード"
          name="password"
          type="password"
          register={register}
          helperText={errors.password?.message}
        />
        <Input
          error={!!errors.confirmPassword?.message}
          label="パスワード確認"
          name="confirmPassword"
          type="password"
          register={register}
          helperText={errors.confirmPassword?.message}
        />
        <Input
          error={!!errors.email?.message}
          label="メール"
          name="email"
          type="email"
          register={register}
          helperText={errors.email?.message}
        />
        <Button type="submit" variant="contained">
          送信
        </Button>
      </Stack>
    </form>
  );
};

export default RegistrationForm;
