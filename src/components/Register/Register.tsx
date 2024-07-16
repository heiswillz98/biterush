import Input from "@/components/Shared/Inputs/Input";
import Dropdown from "@/components/Shared/dropdown/Dropdown";
import { H1, H3, H4, H5, H6, P } from "@/components/Shared/heading/Heading";
import React, { ChangeEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Button from "../Shared/button/Button";
import Checkbox from "../Shared/checkbox/Checkbox";
import UploadInput from "../Shared/uploadInput/UploadInput";
import Link from "next/link";

const currency = [
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
  { label: "AUD", value: "AUD" },
  { label: "CAD", value: "CAD" },
  { label: "ZAR", value: "ZAR" },
  { label: "DEK", value: "DEK" },
  { label: "SEK", value: "SEK" },
  { label: "BTC", value: "BTC" },
];

const Register = () => {
  const [active, setActive] = useState(false);
  const handleDropdownChange = (
    e: ChangeEvent<HTMLSelectElement>,
    fieldName: string
  ) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value,
    });
  };

  const handleCheckbox = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const [formValues, setFormValues] = useState({
    currency: "",
  });
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
        <div className="flex flex-col gap-1 items-center lg:w-full h-screen lg:overflow-auto">
          <div className="flex flex-col gap-3 items-center py-8 pt-14">
            <H5>Create an account</H5>
            <H6>
              Already have an account?{" "}
              <Link href="/login" className="text-[#41c09e]">
                sign in here
              </Link>{" "}
            </H6>
            <Button className="bg-[#41c09e] text-white flex gap-2 items-center py-4 px-16 rounded-md">
              <FaGoogle /> Sign in with Google
            </Button>
            <div className=" flex flex-row gap-3">OR</div>
          </div>

          <div className="w-4/5 flex flex-col gap-5 pb-10 lg:w-[55%]  ">
            <Input labelColor="black" label="Restaurant Name" />
            <Input labelColor="black" label="Email" />
            <Input labelColor="black" label="Phone Number" />
            <Dropdown
              label="School/City"
              options={currency}
              onChange={(e) => handleDropdownChange(e, "currency")}
              dropdownValue={formValues.currency}
              labelColor="black"
            />
            <Input labelColor="black" label="Address" />

            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Display Image (optional)</p>
              <UploadInput label="choose file" />
            </div>

            <Dropdown
              label="Category"
              options={currency}
              onChange={(e) => handleDropdownChange(e, "currency")}
              dropdownValue={formValues.currency}
              labelColor="black"
            />

            <Input labelColor="black" label="Password" />
            <Input labelColor="black" label="Confirm Password" />
            <Checkbox
              label={"I Agree to the Terms and conditions"}
              value={active}
              onChange={handleCheckbox}
            />
            <Button className="bg-[#41c09e] w-4/5 mx-auto py-2 text-white">
              Create Account{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
