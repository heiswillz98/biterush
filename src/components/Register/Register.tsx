import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/Shared/Inputs/Input";
import Dropdown from "@/components/Shared/dropdown/Dropdown";
import { H4, H5, H6, Label } from "@/components/Shared/heading/Heading";
import { FaGoogle } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Button from "../Shared/button/Button";
import Checkbox from "../Shared/checkbox/Checkbox";
import UploadInput from "../Shared/uploadInput/UploadInput";
import Link from "next/link";
import { useState } from "react";

interface FormValues {
  restaurantName: string;
  email: string;
  phoneNumber: string;
  schoolCity: string;
  address: string;
  displayImage: File | null;
  category: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const schoolOption = [
  { label: "Futa", value: "Futa" },
  { label: "Funaab", value: "Funaab" },
  { label: "Unilag", value: "Unilag" },
  { label: "Mapoly", value: "Mapoly" },
];

const categories = [
  { label: "Foods", value: "Foods" },
  { label: "Cakes and Pasteries", value: "Cakes" },
  { label: "Shawarma and Grills", value: "Shawarma" },
  { label: "Others", value: "Others" },
];

const SignUp = () => {
  const [file, setFile] = useState<File | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      restaurantName: "",
      email: "",
      phoneNumber: "",
      schoolCity: "",
      address: "",
      displayImage: null,
      category: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      restaurantName: Yup.string().required("Restaurant Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address Required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      schoolCity: Yup.string().required("School/City is required"),
      address: Yup.string().required("Address is required"),
      category: Yup.string().required("Category is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
      agreeToTerms: Yup.boolean().oneOf(
        [true],
        "You must accept the Terms and Conditions"
      ),
    }),
    onSubmit: (values) => {
      const payload = {
        ...values,
        displayImage: file,
      };
      console.log("Form Submission Payload:", payload);
    },
  });

  const handleFileChange = (file: File | null) => {
    formik.setFieldValue("displayImage", file);
    setFile(file);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row  lg:h-full ">
        <div className="bg-[#41c09e] w-full lg:w-1/2 py-32">
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
              </Link>
            </H6>
            <Button className="bg-[#41c09e] text-white flex gap-2 items-center py-4 px-16 rounded-md">
              <FaGoogle /> Sign in with Google
            </Button>
            <div className="flex flex-row gap-3">OR</div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="w-4/5 flex flex-col gap-5 pb-10 lg:w-[55%]"
          >
            <Input
              labelColor="black"
              label="Restaurant Name"
              id="restaurantName"
              value={formik.values.restaurantName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.restaurantName && formik.errors.restaurantName
              }
            />

            <Input
              labelColor="black"
              label="Email Address"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />

            <Input
              labelColor="black"
              label="Phone Number"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            <Dropdown
              label="School/City"
              options={schoolOption}
              dropdownValue={formik.values.schoolCity}
              onChange={(e) =>
                formik.setFieldValue("schoolCity", e.target.value)
              }
              error={formik.touched.schoolCity && formik.errors.schoolCity}
              labelColor="black"
            />

            <Input
              labelColor="black"
              label="Address"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && formik.errors.address}
            />

            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold">Display Image (optional)</p>
              <UploadInput
                label=""
                value={
                  formik.values.displayImage
                    ? URL.createObjectURL(formik.values.displayImage)
                    : null
                }
                onChange={handleFileChange}
              />
            </div>

            <Dropdown
              label="Category"
              options={categories}
              dropdownValue={formik.values.category}
              onChange={(e) => formik.setFieldValue("category", e.target.value)}
              error={formik.touched.category && formik.errors.category}
              labelColor="black"
            />

            <Input
              labelColor="black"
              label="Password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />

            <Input
              labelColor="black"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />

            <Checkbox
              label="I Agree to the Terms and Conditions"
              checked={formik.values.agreeToTerms}
              onChange={() =>
                formik.setFieldValue(
                  "agreeToTerms",
                  !formik.values.agreeToTerms
                )
              }
              error={formik.touched.agreeToTerms && formik.errors.agreeToTerms}
              value={undefined}
            />

            <Button
              type="submit"
              className="bg-[#41c09e] w-4/5 mx-auto py-2 text-white"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
