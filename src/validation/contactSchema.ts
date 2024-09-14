import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールは必須です"),
  message: yup
    .string()
    .required("メッセージは必須です")
    .min(10, "メッセージは10文字以上必要です"),
});
