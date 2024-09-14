import React from "react";
import { ContactFormProps } from "./ContactForm.types";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { contactSchema } from "../../validation/contactSchema";
import { ContactFormData } from "../../interfaces/contactInterfaces";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<ContactFormData>({
    onSubmit,
    resolver: yupResolver(contactSchema),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="名前"
        name="name"
        register={register}
        error={errors.name?.message}
      />
      <Input
        label="メール"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="メッセージ"
        name="message"
        register={register}
        error={errors.message?.message}
      />
      <button type="submit">送信</button>
    </form>
  );
};

export default ContactForm;
