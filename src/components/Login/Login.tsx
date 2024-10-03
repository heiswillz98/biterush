import Input from "@/components/Shared/Inputs/Input";
import { H5, H6 } from "@/components/Shared/heading/Heading";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import Button from "../Shared/button/Button";
import Link from "next/link";

interface FormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  // Formik setup
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Create payload
      const payload = {
        email: values.email,
        password: values.password,
      };
      // Log the payload to console
      console.log("Login Payload:", payload);
    },
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:h-full">
        <div className="bg-[#41c09e] w-full lg:w-1/2 py-32">
          <div className="flex flex-col items-center gap-6 lg:h-[20rem]">
            <Logo className="text-white" />
            <H5 className="font-bold text-white">Welcome to Bite Rush</H5>
            <H6 className="text-white">
              No 1 Food Ordering platform for students
            </H6>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center lg:w-full lg:h-screen lg:overflow-auto">
          <div className="flex flex-col gap-3 items-center py-8 pt-14">
            <H5>Sign In to Bite Rush</H5>
            <H6>
              New Here?{" "}
              <Link href="/register" className="text-[#41c09e]">
                Create an account
              </Link>
            </H6>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="w-4/5 flex flex-col gap-5 pb-10 lg:w-[55%]"
          >
            <Input
              labelColor="black"
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />

            <Input
              labelColor="black"
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />

            <H6 className="ml-auto text-[#41c09e]">Forgot Password?</H6>

            <Button
              type="submit"
              className="bg-[#41c09e] w-4/5 mx-auto py-2 text-white"
            >
              Login
            </Button>

            <div className="text-center">OR</div>
          </form>

          <div className="flex flex-col gap-6">
            <Button className="bg-slate-100 text-[gray] flex gap-2 items-center py-4 px-16 rounded-md">
              <FaGoogle /> Continue with Google
            </Button>
            <Button className="bg-slate-100 text-[gray] flex gap-2 items-center py-4 px-16 rounded-md">
              <FaFacebook /> Continue with Facebook
            </Button>
            <Button className="bg-slate-100 text-[gray] flex gap-2 items-center py-4 px-16 rounded-md">
              <FaApple />
              Continue with Apple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
