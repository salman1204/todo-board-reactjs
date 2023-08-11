import logo from "@/assets/logo.webp";
import { useLogin } from "@/hooks/mutations/auth";
import { LoginFormTypes } from "@/types/authentication";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { passwordRules, userEmailRules } from "./login-form-rules";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useLogin();

  const onFinish = (values: LoginFormTypes) => {
    mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem("todo_access_token", data?.data?.access);
        localStorage.setItem("todo_refresh_token", data?.data?.refresh);
        navigate("/board", { replace: true });
      },
      onError: () => {
        message.error({
          content: "Something went wrong",
        });
      },
    });
  };

  return (
    <div className='min-w-screen flex min-h-screen items-center justify-center bg-slate-100'>
      <div className='shadow-white-1000/100 m-1 w-96 bg-white p-10 shadow-lg'>
        <img src={logo} alt='Logo' className='mx-auto block w-40' />

        <h3 className='my-5 text-center text-neutral-500'>Log in to TODO</h3>
        <Form
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={onFinish}
          className='justify-centet align-center mt-7 flex-row'
        >
          <Form.Item<LoginFormTypes>
            name='email'
            rules={userEmailRules}
            validateTrigger={"onBlur"}
          >
            <Input placeholder='Enter Email' />
          </Form.Item>

          <Form.Item<LoginFormTypes>
            name='password'
            rules={passwordRules}
            validateTrigger={"onBlur"}
          >
            <Input.Password placeholder='Enter Password' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='w-full'>
              Login
            </Button>
          </Form.Item>
        </Form>

        <hr className='border-t-1 text-neutral-500' />
        <p
          className='mt-5 cursor-pointer text-center text-blue-500 '
          onClick={() => navigate("/signup")}
        >
          Sign up for an account
        </p>
      </div>
    </div>
  );
};

export default Login;
