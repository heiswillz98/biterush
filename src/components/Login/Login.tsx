import Input from "@/components/Shared/Inputs/Input";
import Dropdown from "@/components/Shared/dropdown/Dropdown";
import { H1, H3, H4, H5, H6, P } from "@/components/Shared/heading/Heading";
import React, { ChangeEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Button from "../Shared/button/Button";

import { FaApple, FaFacebook } from "react-icons/fa6";
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row  lg:h-full ">
        <div className=" bg-[#41c09e]  w-full lg:w-1/2 py-32 ">
          <div className="flex flex-col items-center gap-6 lg:h-[20rem]">
            <Logo className="text-white" />
            <H4 className="font-bold text-white">Welcome to Bite Rush</H4>
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
              </Link>{" "}
            </H6>
          </div>

          <div className="w-4/5 flex flex-col gap-5 pb-10 lg:w-[55%]  ">
            <Input labelColor="black" label="Email" />

            <Input labelColor="black" label="Password" />
            <H6 className="ml-auto text-[#41c09e]">Forgot Password?</H6>

            <Button className="bg-[#41c09e] w-4/5 mx-auto py-2 text-white">
              Login
            </Button>

            <div className=" text-center">OR</div>
          </div>
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

export default Register;
