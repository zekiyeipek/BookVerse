import React from "react";

import { Img, Input, Text } from "components";

const LoginPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1024px] items-center justify-start mx-auto p-3.5 w-full"
        style={{ backgroundImage: "url('images/img_rectangle2.png')" }}
      >
        <div className="bg-blue_gray-100_ef flex flex-col items-center justify-end mb-7 p-[46px] md:px-5 rounded-[48px] w-[56%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[99px] justify-start mt-[55px] w-[92%] md:w-full">
            <div className="md:h-[269px] h-[289px] mr-[21px] relative w-[97%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[269px] object-cover right-[0] w-[93%]"
                src="images/img_rectangle10.png"
                alt="rectangleTen"
              />
              <Text
                className="absolute left-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900_99 top-[0]"
                size="txtInterSemiBold40"
              >
                Welcome to
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[35px] w-[95%] md:w-full">
              <Input
                name="email"
                placeholder="Enter your Email"
                className="leading-[normal] md:text-[22px] p-0 placeholder:text-black-900 sm:text-xl text-2xl text-center w-full"
                wrapClassName="flex w-[99%]"
                type="email"
                suffix={
                  <div className="mb-1 ml-3 sm:w-full sm:mx-0 w-[8%] bg-gray-600">
                    <Img
                      className="my-auto"
                      src="images/img_lock_gray_600_30x47.svg"
                      alt="lock"
                    />
                  </div>
                }
                shape="round"
                size="lg"
              ></Input>
              <Input
                name="password"
                placeholder="Enter your Password"
                className="leading-[normal] md:text-[22px] p-0 placeholder:text-black-900 sm:text-xl text-2xl text-center w-full"
                wrapClassName="flex mt-[53px] w-[99%]"
                type="password"
                suffix={
                  <Img
                    className="ml-3 my-auto"
                    src="images/img_teenyiconspasswordsolid.svg"
                    alt="teenyicons:password-solid"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[45px] w-full">
                <Input
                  name="forgotpassword"
                  placeholder="Forgot password ?"
                  className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-900 sm:text-xl text-2xl text-center w-full"
                  wrapClassName="sm:flex-1 rounded-[25px] sm:w-full"
                  type="password"
                  color="gray_50"
                ></Input>
                <a
                  href="javascript:"
                  className="bg-red-400 h-[51px] justify-center pb-2 pt-3 sm:px-5 px-[35px] rounded-[25px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[262px]"
                >
                  <Text size="txtInterSemiBold24">Login</Text>
                </a>
              </div>
              <div className="flex flex-row gap-[21px] items-start justify-center mt-[118px] w-[53%] md:w-full">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterMedium20"
                >
                  Dont have an acount ?
                </Text>
                <Text
                  className="text-center text-red-900 text-xl"
                  size="txtInterMedium20Red900"
                >
                  Sign-up
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
