import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const SearchPage = () => {
  const [groupfifteenvalue, setGroupfifteenvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[167px] bg-blue_gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-[21px] w-full">
            <div className="flex flex-col gap-[54px] items-start justify-start w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Input
                  name="groupFifteen"
                  placeholder="Search books, authors, and genres"
                  value={groupfifteenvalue}
                  onChange={(e) => setGroupfifteenvalue(e)}
                  className="!placeholder:text-black-900 !text-black-900 font-light leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-center w-full"
                  wrapClassName="flex sm:flex-1 sm:mt-0 mt-[3px] outline outline-[1px] outline-red-100 rounded-[20px] w-[71%] sm:w-full"
                  suffix={
                    groupfifteenvalue?.length > 0 ? (
                      <CloseSVG
                        className="mt-auto mb-[5px] cursor-pointer ml-[35px]"
                        onClick={() => setGroupfifteenvalue("")}
                        fillColor="#000000"
                        height={39}
                        width={36}
                        viewBox="0 0 36 39"
                      />
                    ) : (
                      <Img
                        className="mt-auto mb-[5px] cursor-pointer ml-[35px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    )
                  }
                  color="white_A700"
                ></Input>
                <Img
                  className="h-[37px] sm:ml-[0] ml-[250px]"
                  src="images/img_tdesignnotificationfilled.svg"
                  alt="tdesignnotifica"
                />
                <Img
                  className="h-[38px] sm:ml-[0] ml-[11px]"
                  src="images/img_iconoirprofilecircle.svg"
                  alt="iconoirprofilec"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                <div className="flex flex-col gap-[31px] justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterLight24"
                  >
                    Book Lovers
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-11 grid grid-cols-2 ml-5 md:ml-[0] w-[93%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                      <div className="h-[87px] relative w-full">
                        <div className="bg-blue_gray-100 h-[87px] m-auto rounded-[48px] w-full"></div>
                        <Img
                          className="absolute h-[72px] inset-[0] justify-center m-auto w-[72px]"
                          src="images/img_claritypictureline.svg"
                          alt="claritypicturel"
                        />
                      </div>
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtInterLight16"
                      >
                        John Doe
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                      <div className="h-[87px] relative w-full">
                        <div className="bg-blue_gray-100 h-[87px] m-auto rounded-[48px] w-full"></div>
                        <Img
                          className="absolute h-[72px] inset-[0] justify-center m-auto w-[72px]"
                          src="images/img_claritypictureline.svg"
                          alt="claritypicturel"
                        />
                      </div>
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtInterLight16"
                      >
                        John Doe
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100_02 h-px mt-[37px] w-full" />
            <div className="flex flex-col items-start justify-start mt-[33px] w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[17%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterLight24"
                >
                  Reading Groups
                </Text>
                <Button
                  className="cursor-pointer font-light leading-[normal] min-w-[199px] outline outline-[1px] outline-gray-700_01 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                  color="white_A700"
                >
                  Connect
                </Button>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[151px] w-full" />
              <div className="flex flex-col gap-[26px] justify-start mt-[37px] w-[18%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[18px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterLight24"
                >
                  Location
                </Text>
                <div className="h-[100px] md:h-[98px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[1px] outline-gray-700_01 p-[5px] rounded-[15px]">
                    <Text
                      className="ml-3.5 md:ml-[0] mt-[68px] text-base text-black-900 text-center"
                      size="txtInterLight16"
                    >
                      10:00 AM
                    </Text>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl top-[0] w-full"
                    size="txtInterSemiBold24Black900"
                  >
                    San Francisco, USA
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
