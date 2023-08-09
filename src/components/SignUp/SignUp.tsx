import logo from "@/assets/logo.webp";
import { SignupFormTypes } from "@/types/authentication";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import {
  confirmPasswordRules,
  passwordRules,
  userEmailRules,
} from "./signup-form-rules";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className='min-w-screen flex min-h-screen items-center justify-center bg-slate-100'>
      <div
        className='shadow-white-1000/100 m-1 bg-white p-10 shadow-lg'
        style={{ width: "25rem" }}
      >
        <img
          src={logo}
          alt='Logo'
          className='mx-auto block'
          style={{ width: "10rem" }}
        />

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
            name='username'
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
            name='confirmPassword'
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
