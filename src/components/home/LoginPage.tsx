"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const formHandler = (e: any) => {
    e.preventDefault();
    setError(true);
    if (
      formData.email !== "" &&
      formData.password.length >= 6 &&
      !passwordError
    ) {
      setFormData({
        email: "",
        password: "",
        checkbox: false,
      });
      setError(false);
      setPasswordError("");
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    } else if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-[30px] pr-7 max-lg:pt-8 max-lg:pb-24 max-lg:px-9">
      <div className="flex w-full justify-end items-center gap-[120px] max-xl:justify-center 2xl:justify-center">
        <div className="min-w-[456px] max-sm:min-w-[320px] flex justify-end flex-col max-lg:max-w-[320px] max-lg:mx-auto">
          <Link href="#">
            <Image
              src="/assets/images/png/page-logo.png"
              alt="logo"
              width={163}
              height={31}
            />
          </Link>
          <div className="pt-[138px] max-lg:pt-[90px]">
            <h1 className="text-3xl font-semibold leading-[58px] text-light-black tracking-[1.22px]">
              Welcome Back
            </h1>
            <p className="text-sm font-normal leading-[30px] text-light-gray pl-0.5">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={formHandler} className="w-full ">
              <label
                htmlFor="email"
                className=" font-medium leading-5 text-black-light"
              >
                {error ? (
                  <p className="!text-red-900 text-sm font-bold leading-[30px]">
                    Enter Your Email
                  </p>
                ) : (
                  <p className="text-gray text-sm leading-[30px]">Email</p>
                )}
              </label>
              <input
                value={formData.email}
                onChange={(e: any) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-[19px_14px] shadow-[0_1px_2px_0_#1018280D] mb-[18px] mt-1.5 placeholder:text-gray placeholder:text-sm placeholder:leading-6 border border-solid border-gray-light rounded-lg outline-none"
                placeholder="Email"
                type="email"
                id="email"
              />
              <label
                htmlFor="password"
                className=" font-medium leading-5 text-black-light"
              >
                {error || passwordError ? (
                  <p className="!text-red-900 font-bold text-sm leading-[30px]">
                    {passwordError || "Enter Your Password"}
                  </p>
                ) : (
                  <p className="text-gray text-sm leading-[30px]">Password</p>
                )}
              </label>
              <input
                value={formData.password}
                onChange={(e: any) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-[19px_14px] shadow-[0_1px_2px_0_#1018280D] mt-1.5 placeholder:text-gray placeholder:text-sm placeholder:leading-6 border border-solid border-gray-light rounded-lg outline-none"
                type="password"
                placeholder="Password"
                id="password"
              />
              <span className="flex justify-between mt-[18px] max-sm:flex-col">
                <span className="flex gap-3 items-center">
                  <input
                    className="!size-5 !bg-white !rounded-md !border !border-solid !border-gray-light"
                    type="checkbox"
                    id="check"
                    checked={formData.checkbox}
                    onChange={(e: any) =>
                      setFormData({ ...formData, checkbox: e.target.checked })
                    }
                  />
                  <label
                    htmlFor="check"
                    className="font-inter leading-6 text-gray-dark cursor-pointer"
                  >
                    Remember for 30 days
                  </label>
                </span>
                <Link
                  href="/"
                  className="font-inter leading-6 text-blue-light max-sm:mt-[18px]"
                >
                  Forgot Password
                </Link>
              </span>
              <button
                type="submit"
                className="w-full pt-[9px] bg-black-light pb-2.5 font-medium leading-6 text-sm text-white mt-6 rounded-[9px] transition-all ease-linear duration-300 hover:bg-white hover:text-black border border-solid border-transparent hover:border-black"
              >
                Sign In
              </button>
              <button className="w-full pt-[9px] gap-2.5 pb-2.5 font-medium leading-6 text-sm text-black-light flex mt-1.5 rounded-[9px] justify-center items-center border border-solid border-gray-light transition-all ease-linear duration-300 hover:bg-black hover:text-white">
                <Image
                  src={"/assets/images/png/google-logo.png"}
                  alt="google logo"
                  width={22}
                  height={22}
                />
                Sign in with Google
              </button>
              <span className="flex w-full justify-center gap-2.5 mt-[18px]">
                <p className="font-inter leading-6 text-gray-dark">
                  Don’t have an account?
                </p>
                <Link href={"/"} className="text-blue-light font-inter">
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="w-6/12 max-xl:hidden max-w-[759px] bg-blue-light min-h-[899px] flex items-center justify-center rounded-[20px]">
          <Image
            width={617}
            height={541}
            src="/assets/images/png/layer-image.png"
            alt="layer"
          />
        </div>
      </div>
    </div>
  );
};
