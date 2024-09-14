import * as yup from "yup";

const VALID_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\w{6,20}$/;

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required("ユーザー名は必須です")
    .min(4, "ユーザー名は4文字以上必要です"),
  password: yup
    .string()
    .required("パスワードは必須です")
    .matches(
      VALID_PASSWORD_REGEX,
      "パスワードは6〜20文字の英大文字・小文字・数字を含む必要があります"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "パスワードが一致しません")
    .required("確認用パスワードは必須です"),
  email: yup
    .string()
    .matches(
      /^(?=.*[!-/:-@[-`{-~]).*$/,
      "有効なメールアドレスを入力してください"
    )
    .required("メールは必須です"),
});

//
