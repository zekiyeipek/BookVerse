import React from "react";

import { Button, Img, Input, Text } from "components";

const SignupPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1024px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-0.5 md:px-5 w-6"
          style={{ backgroundImage: "url('images/img_group15.svg')" }}
        >
          <Img className="h-5 w-5" src="images/img_lock.svg" alt="lock" />
        </div>
        <div className="absolute bottom-[0] md:h-[1024px] h-[1130px] inset-x-[0] mx-auto pb-[106px] md:px-5 w-full">
          <Img
            className="md:h-[1024px] h-[1280px] mx-auto object-cover w-full"
            src="images/img_rectangle2.png"
            alt="rectangleTwo"
          />
          <div className="absolute bg-blue_gray-100_ef flex flex-col inset-x-[0] items-center justify-end mx-auto p-[68px] md:px-10 sm:px-5 rounded-[48px] top-[1%] w-[55%]">
            <div className="flex flex-col md:gap-10 gap-[79px] justify-start mt-8 w-[97%] md:w-full">
              <div className="md:h-[251px] h-[269px] mr-[27px] relative w-[96%] sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[251px] object-cover right-[0] w-[93%]"
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
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] w-[95%] md:w-full">
                <Input
                  name="username"
                  placeholder="Enter your Username"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-black-900 sm:text-xl text-2xl text-center w-full"
                  wrapClassName="flex w-full"
                  type="text"
                  suffix={
                    <div className="ml-3 sm:w-full sm:mx-0 w-[7%] bg-gray-600">
                      <Img
                        className="my-auto"
                        src="images/img_lock_gray_600.svg"
                        alt="lock"
                      />
                    </div>
                  }
                  shape="round"
                  size="md"
                ></Input>
                <Input
                  name="email"
                  placeholder="Enter your Email"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-black-900 sm:text-xl text-2xl text-center w-full"
                  wrapClassName="flex mt-[35px] w-full"
                  type="email"
                  suffix={
                    <div className="mb-1 ml-3 sm:w-full sm:mx-0 w-[9%] bg-gray-600">
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
                  wrapClassName="flex mt-[35px] w-full"
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
                <Input
                  name="confirmpassword"
                  placeholder="Confirm your Password"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-black-900 sm:text-xl text-2xl text-center w-full"
                  wrapClassName="flex mt-[35px] w-full"
                  type="password"
                  suffix={
                    <Img
                      className="ml-[35px] my-auto"
                      src="images/img_teenyiconspasswordsolid.svg"
                      alt="teenyicons:password-solid"
                    />
                  }
                  shape="round"
                ></Input>
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[23px] w-[81%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[181px] rounded-[25px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="gray_50"
                    size="md"
                  >
                    Login
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[181px] rounded-[25px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="red_400"
                    size="md"
                  >
                    Sign-up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
