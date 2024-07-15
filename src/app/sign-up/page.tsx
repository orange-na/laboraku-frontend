"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidationSchema } from "@/utils/ValidationSchema";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: "onChange",
    resolver: zodResolver(SignUpValidationSchema),
  });

  const handleSignUp = (data: SignUpForm) => {
    // ここでサインアップロジックを実装します
    console.log("Signing up with:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="p-8 bg-white rounded shadow-md"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <h1 className="text-lg font-bold text-center mb-6">アカウント作成</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            メールアドレス
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            名前
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            パスワード
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          サインアップ
        </button>
      </form>
    </div>
  );
};

export default SignUp;
