import { z } from "zod";

export const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[ -~A-Z0-9]{8,}$";

export const SignUpValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください。" }),
  name: z
    .string()
    .min(1, { message: "名前を入力してください。" })
    .max(255, { message: "名前は255文字以内で入力してください。" }),
  password: z.string().regex(RegExp(passwordRegex), {
    message:
      "小文字、大文字、数字を含む8文字以上のパスワードを入力してください。",
  }),
});

export const LoginValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください。" }),
  password: z.string().regex(RegExp(passwordRegex), {
    message:
      "小文字、大文字、数字を含む8文字以上のパスワードを入力してください。",
  }),
});
