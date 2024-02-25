import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-48 items-start justify-start mx-auto md:px-10 sm:px-5 px-[116px] py-[149px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col h-[715px] md:h-auto items-center justify-start max-w-[780px] w-full">
          <div className="h-[715px] relative w-full">
            <div className="absolute md:h-[358px] h-[390px] right-[0] top-[20%] w-[55%] sm:w-full">
              <Img
                className="absolute bottom-[0] h-[358px] inset-x-[0] mx-auto"
                src="images/img_polygon5.svg"
                alt="polygonFive"
              />
              <Img
                className="absolute h-[257px] right-[4%] top-[0]"
                src="images/img_vector38.svg"
                alt="vectorThirtyEight"
              />
            </div>
            <Img
              className="absolute bottom-[32%] h-[210px] right-[8%]"
              src="images/img_vector39.svg"
              alt="vectorThirtyNine"
            />
            <Img
              className="absolute h-[715px] inset-[0] justify-center m-auto object-cover w-[98%]"
              src="images/img_whatsappimage20231030.png"
              alt="whatsappimageTwenty"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[29%] md:w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-[360px]">
            <Img
              className="h-[65px] md:h-auto object-cover rounded-[32px] w-[115px] sm:w-full"
              src="images/img_whatsappimage20231030_65x115.png"
              alt="whatsappimageTwenty_One"
            />
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center w-full"
                size="txtInterSemiBold30"
              >
                Log in to your account
              </Text>
              <Text
                className="text-base text-blue_gray-500 text-center w-full"
                size="txtInterRegular16"
              >
                Welcome back! Please enter your details.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start mt-[15px] w-[360px]">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Email
                    </Text>
                    <Input
                      name="input"
                      placeholder="Enter your email"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Password
                    </Text>
                    <Input
                      name="input_One"
                      placeholder="••••••••"
                      className="!placeholder:text-blue_gray-500_01 !text-blue_gray-500_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <CheckBox
                className="font-medium text-left text-sm"
                inputClassName="border border-blue_gray-100 border-solid h-4 mr-[5px] w-4"
                name="text_One"
                id="text_One"
                label="Remember for 30 days"
              ></CheckBox>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-blue-700 text-sm w-auto"
                  >
                    <Text size="txtInterMedium14Blue700">Forgot password</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-[360px]">
                <Button
                  className="common-pointer border border-blue-700 border-solid cursor-pointer font-medium shadow-bs text-base text-center w-full"
                  onClick={() => navigate("/dashboard")}
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Sign in
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center w-[360px]">
                <Button
                  className="common-pointer border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[360px]"
                  onClick={() => googleSignIn()}
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_social_icon.svg"
                      alt="Social icon"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  variant="fill"
                >
                  <div className="!text-blue_gray-800 font-medium text-base text-left">
                    Sign in with Google
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-start justify-center mt-8 w-[360px]">
            <a
              href="javascript:"
              className="text-blue_gray-500_01 text-sm w-auto"
            >
              <Text size="txtInterRegular14">Don’t have an account?</Text>
            </a>
            <div className="flex flex-col items-start justify-start w-auto">
              <div
                className="common-pointer flex flex-col items-center justify-center w-auto"
                onClick={() => navigate("/signup")}
              >
                <a href="javascript:" className="text-blue-700 text-sm w-auto">
                  <Text size="txtInterMedium14Blue700">Sign up</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
