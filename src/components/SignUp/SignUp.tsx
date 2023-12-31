import logo from "@/assets/logo.webp";
import { useSignupUser } from "@/hooks/mutations/auth-mutations";
import { SignupFormTypes } from "@/types/authentication-types";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  confirmPasswordRules,
  passwordRules,
  userEmailRules,
} from "./signup-form-rules";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useSignupUser();

  const onFinish = (values: SignupFormTypes) => {
    mutate(values, {
      onSuccess: (data) => {
        message.success({
          content: data.response_message,
        });
        navigate("/", { replace: true });
      },
      onError: (data: any) => {
        message.error({
          content: data?.response?.data?.response_message,
        });
      },
    });
  };

  return (
    <div className='min-w-screen flex min-h-screen items-center justify-center bg-slate-100'>
      <div className='shadow-white-1000/100 m-1 w-96 bg-white p-10 shadow-lg'>
        <img src={logo} alt='Logo' className='mx-auto block w-40' />

        <h3 className='my-5 text-center text-neutral-500'>
          Sign up for your account
        </h3>
        <Form
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={onFinish}
          className='justify-centet align-center mt-7 flex-row'
        >
          <Form.Item<SignupFormTypes>
            name='email'
            rules={userEmailRules}
            validateTrigger={"onBlur"}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item<SignupFormTypes>
            name='password'
            rules={passwordRules}
            validateTrigger={"onChange"}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item<SignupFormTypes>
            name='confirm_password'
            rules={confirmPasswordRules}
            validateTrigger={"onBlur"}
          >
            <Input.Password placeholder='Confirm Password' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='w-full'>
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <hr className='border-t-1 text-neutral-500' />
        <p
          className='mt-5 cursor-pointer text-center text-blue-500 '
          onClick={() => navigate("/")}
        >
          Already have an account? Log In
        </p>
      </div>
    </div>
  );
};

export default SignUp;
