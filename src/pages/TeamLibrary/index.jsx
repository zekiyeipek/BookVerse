import React from "react";

import { Button, Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const TeamLibraryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[167px] bg-blue_gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col justify-start md:mt-0 mt-[21px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[42px] w-[97%] md:w-full">
              <div className="md:h-[178px] h-[87px] mb-[91px] md:mt-0 mt-[54px] relative w-[9%] md:w-full">
                <div className="bg-blue_gray-100 h-[87px] m-auto rounded-[48px] w-full"></div>
                <Img
                  className="absolute h-[72px] inset-[0] justify-center m-auto w-[72px]"
                  src="images/img_claritypictureline.svg"
                  alt="claritypicturel"
                />
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mb-[90px] md:ml-[0] ml-[49px] md:mt-0 mt-[65px]">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterRegular24"
                >
                  Your Reading Space
                </Text>
                <Text
                  className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterRegular24"
                >
                  Connect with Book Lovers
                </Text>
              </div>
              <div className="flex flex-col md:gap-10 gap-[127px] justify-start md:ml-[0] ml-[83px] w-[55%] md:w-full">
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[476px] w-[23%] md:w-full">
                  <Img
                    className="h-[39px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Img
                    className="h-[37px] ml-[18px]"
                    src="images/img_tdesignnotificationfilled.svg"
                    alt="tdesignnotifica"
                  />
                  <Img
                    className="h-[38px] ml-[11px]"
                    src="images/img_iconoirprofilecircle.svg"
                    alt="iconoirprofilec"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[23px] sm:mt-0 mt-[25px]"
                    src="images/img_megaphone.svg"
                    alt="megaphone"
                  />
                  <Img
                    className="h-[25px] sm:mt-0 mt-6"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[244px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="gray_300"
                    size="lg"
                  >
                    Create Bookshelf
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[244px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="red_200"
                    size="lg"
                  >
                    Create Video
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-2 md:ml-[0] mt-2.5 w-3/5 md:w-full">
              <div className="flex flex-col gap-[43px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[19px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterSemiBold24Black900"
                >
                  Bookshelf Videos
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[39px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[314px] h-[315px] relative w-full">
                    <Img
                      className="h-[143px] ml-[49px] mt-[63px]"
                      src="images/img_claritypictureline.svg"
                      alt="claritypicturel"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[1px] outline-blue_gray-100_01 p-3 rounded-[18px] w-full">
                      <div className="flex flex-col justify-start mb-[22px] mt-[5px] w-[82%] md:w-full">
                        <div className="flex flex-row gap-[9px] items-center justify-start w-[51%] md:w-full">
                          <Img
                            className="h-[38px]"
                            src="images/img_iconoirprofilecircle.svg"
                            alt="iconoirprofilec"
                          />
                          <Text
                            className="text-base text-black-900 text-center"
                            size="txtInterLight16"
                          >
                            Julian Wan
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[38px] mt-40 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                          size="txtInterSemiBold24Black900"
                        >
                          Book Club Meeting
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[70px] mt-4 text-[15px] text-black-900 text-center"
                          size="txtInterLight15"
                        >
                          Joined on 20 Sep 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[314px] h-[315px] relative w-full">
                    <Img
                      className="h-[143px] ml-[49px] mt-[63px]"
                      src="images/img_claritypictureline.svg"
                      alt="claritypicturel"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[1px] outline-blue_gray-100_01 p-3 rounded-[18px] w-full">
                      <div className="flex flex-col justify-start mb-[22px] mt-[5px] w-[82%] md:w-full">
                        <div className="flex flex-row gap-[9px] items-center justify-start w-[51%] md:w-full">
                          <Img
                            className="h-[38px]"
                            src="images/img_iconoirprofilecircle.svg"
                            alt="iconoirprofilec"
                          />
                          <Text
                            className="text-base text-black-900 text-center"
                            size="txtInterLight16"
                          >
                            Julian Wan
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[38px] mt-40 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                          size="txtInterSemiBold24Black900"
                        >
                          Book Club Meeting
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[70px] mt-4 text-[15px] text-black-900 text-center"
                          size="txtInterLight15"
                        >
                          Joined on 20 Sep 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[102px] w-[48%] md:w-full">
              <div className="flex flex-col gap-12 justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterSemiBold24Black900"
                >
                  Bookshelves
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[33px] grid sm:grid-cols-1 grid-cols-2 justify-center md:ml-[0] ml-[15px] w-[98%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray-100_01 p-2 rounded-[18px] w-full">
                    <div className="flex flex-col gap-[5px] justify-start mb-2 ml-2.5 md:ml-[0] w-[86%] md:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-[65%] md:w-full">
                        <Img
                          className="h-[38px]"
                          src="images/img_iconoirprofilecircle.svg"
                          alt="iconoirprofilec"
                        />
                        <Text
                          className="text-base text-black-900 text-center"
                          size="txtInterLight16"
                        >
                          Julian Wan
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[17px] text-black-900 text-center text-xl"
                        size="txtInterMedium20"
                      >
                        Book Collaborations
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[34px] text-[15px] text-black-900 text-center"
                        size="txtInterLight15"
                      >
                        Joined on 20 Sep 2021
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray-100_01 p-2 rounded-[18px] w-full">
                    <div className="flex flex-col gap-[5px] justify-start mb-2 ml-2.5 md:ml-[0] w-[86%] md:w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[65%] md:w-full">
                        <Img
                          className="h-[38px]"
                          src="images/img_iconoirprofilecircle.svg"
                          alt="iconoirprofilec"
                        />
                        <Text
                          className="text-base text-black-900 text-center"
                          size="txtInterLight16"
                        >
                          Julian Wan
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[17px] text-black-900 text-center text-xl"
                        size="txtInterMedium20"
                      >
                        Book Collaborations
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[34px] text-[15px] text-black-900 text-center"
                        size="txtInterLight15"
                      >
                        Joined on 20 Sep 2021
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamLibraryPage;
