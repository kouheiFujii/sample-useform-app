import React from "react";
import { ContactFormProps } from "./ContactForm.types";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { contactSchema } from "../../validation/contactSchema";
import { ContactFormData } from "../../interfaces/contactInterfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<ContactFormData>({
    onSubmit,
    resolver: yupResolver(contactSchema),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} sx={{ maxWidth: "20rem" }}>
        <Input
          error={!!errors.name?.message}
          label="名前"
          name="name"
          register={register}
          helperText={errors.name?.message}
        />
        <Input
          error={!!errors.email?.message}
          label="メール"
          name="email"
          type="email"
          register={register}
          helperText={errors.email?.message}
        />
        <Input
          error={!!errors.message?.message}
          label="メッセージ"
          name="message"
          register={register}
          helperText={errors.message?.message}
        />
        <Button type="submit" variant="contained">
          送信
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;
