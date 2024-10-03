import SignIn from "@/components/Login/Login";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      {/* <Navbar /> */}
      <SignIn />
    </div>
  );
};

export default Login;
