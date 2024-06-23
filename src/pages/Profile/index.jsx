import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ProfilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-[25px] items-start mx-auto sm:pr-5 pr-[26px] w-full">
        <Sidebar1 className="!sticky !w-[167px] bg-blue_gray-100 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 md:h-[521px] sm:h-[770px] h-[970px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[218px] justify-start md:mt-0 mt-[54px] w-[53%] md:w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[49px] w-[79%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-end justify-between w-full">
                    <div className="h-[87px] md:h-[89px] mb-0.5 relative w-1/5 sm:w-full">
                      <div className="bg-blue_gray-100 h-[87px] m-auto rounded-[48px] w-full"></div>
                      <Img
                        className="absolute h-[72px] inset-[0] justify-center m-auto w-[72px]"
                        src="images/img_claritypictureline.svg"
                        alt="claritypicturel"
                      />
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-[11px] w-[76%] sm:w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                        size="txtInterRegular36"
                      >
                        Sally Robins
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start ml-1 md:ml-[0] mt-0.5 w-[99%] md:w-full">
                        <Img
                          className="h-[29px]"
                          src="images/img_television.svg"
                          alt="television"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                          size="txtInterRegular24"
                        >
                          <>Reading &#39;Pride and Prejudice&#39;</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-6 justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtInterMedium24Black900"
                    >
                      Total Statistics
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 grid-cols-3 justify-center md:ml-[0] ml-[22px] w-[97%]"
                      orientation="horizontal"
                    >
                      <div className="bg-red-50 flex flex-col items-center justify-end p-2.5 rounded-[18px] w-full">
                        <div className="bg-red-100_01 flex flex-col items-end justify-start mt-[7px] pb-2 px-2 rounded-[18px] w-[98%] md:w-full">
                          <Img
                            className="h-[71px] mr-[39px]"
                            src="images/img_phcheckbold.svg"
                            alt="phcheckbold"
                          />
                        </div>
                        <Text
                          className="mt-3 text-base text-black-900 text-center"
                          size="txtInterMedium16"
                        >
                          <>Books I&#39;ve finished</>
                        </Text>
                        <Text
                          className="mt-[15px] text-black-900 text-center text-xl"
                          size="txtInterMedium20"
                        >
                          3
                        </Text>
                      </div>
                      <div className="bg-red-50_01 flex flex-col gap-3.5 items-center justify-end p-[5px] rounded-[18px] w-full">
                        <div className="bg-red-100_01 flex flex-col items-center justify-end mt-3 p-2.5 rounded-[18px] w-[93%] md:w-full">
                          <Img
                            className="h-[57px]"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                        </div>
                        <Text
                          className="text-base text-black-900 text-center"
                          size="txtInterMedium16"
                        >
                          <>Hours I&#39;ve spent reading</>
                        </Text>
                        <Text
                          className="h-[25px] mb-[5px] text-black-900 text-center text-xl"
                          size="txtInterMedium20"
                        >
                          56
                        </Text>
                      </div>
                      <div className="bg-red-50_01 flex flex-col gap-3.5 justify-end p-2.5 rounded-[18px] w-full">
                        <div className="bg-red-100_01 flex flex-col items-center justify-end mt-[7px] mx-auto p-2 rounded-[18px] w-[98%] md:w-full">
                          <Img
                            className="h-[60px]"
                            src="images/img_ticket_blue_gray_900_01.svg"
                            alt="ticket"
                          />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[27px] mr-[23px] text-base text-black-900 text-center"
                          size="txtInterMedium16"
                        >
                          <>Skills I&#39;ve gained</>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[76px] mr-[90px] text-black-900 text-center text-xl"
                          size="txtInterMedium20"
                        >
                          7
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[690px] justify-start w-[36%] md:w-full">
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[268px] w-[34%] md:w-full">
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
                <div className="flex sm:flex-col flex-row gap-[23px] items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[203px] outline outline-[1px] outline-black-900_75 text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    size="xs"
                  >
                    Find friends
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[206px] outline outline-[1px] outline-black-900_75 text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    color="red_400"
                    size="xs"
                  >
                    Invite friends
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between right-[0] top-[11%] w-[86%]">
            <div className="flex flex-row items-start justify-between md:mt-0 mt-[74px] outline outline-[7px] outline-red-100_02 p-1 rounded-[12px] w-[41%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start ml-[18px] mt-[3px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtInterRegular32"
                >
                  0
                </Text>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Books in my
                    <br /> library
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[13px] items-center justify-start mt-[3px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtInterRegular32"
                >
                  2
                </Text>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  Followers
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] h-[97px] items-center justify-start mr-[21px] mt-[3px] w-[97px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtInterRegular32"
                >
                  32
                </Text>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Books I&#39;m <br />
                    following
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] justify-start w-1/2 md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterMedium24Black900"
              >
                Friend Suggestions
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[227px] items-center justify-end ml-3 md:ml-[0] p-[9px] w-[98%] md:w-full"
                style={{ backgroundImage: "url('images/img_group22.svg')" }}
              >
                <div className="flex flex-col gap-[41px] items-start justify-start mt-[3px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <div className="h-[58px] relative w-[14%] sm:w-full">
                      <div className="bg-blue_gray-100 h-[58px] m-auto rounded-[32px] w-full"></div>
                      <Img
                        className="absolute h-12 inset-[0] justify-center m-auto w-12"
                        src="images/img_claritypictureline.svg"
                        alt="claritypicturel_One"
                      />
                    </div>
                    <Text
                      className="mb-3.5 sm:ml-[0] ml-[30px] sm:mt-0 mt-[18px] text-black-900 text-center text-xl"
                      size="txtInterSemiBold20"
                    >
                      Laura Evans
                    </Text>
                    <div className="bg-red-400 flex sm:flex-1 flex-col items-center justify-start mb-1 sm:ml-[0] ml-[193px] sm:mt-0 mt-[19px] outline outline-[1px] outline-black-900_75 p-[5px] rounded-[10px] w-[8%] sm:w-full">
                      <Img
                        className="h-[23px]"
                        src="images/img_icroundplus.svg"
                        alt="icroundplus"
                      />
                    </div>
                    <Img
                      className="h-6 mb-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-[25px]"
                      src="images/img_icroundminus.svg"
                      alt="icroundminus"
                    />
                  </div>
                  <div className="flex flex-row gap-[150px] items-start justify-end md:ml-[0] ml-[93px] w-[81%] md:w-full">
                    <Text
                      className="text-black-900 text-center text-xl"
                      size="txtInterSemiBold20"
                    >
                      Alexander Thompson
                    </Text>
                    <Img
                      className="h-6 mt-0.5"
                      src="images/img_icroundminus.svg"
                      alt="icroundminus_One"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[109px] outline outline-[1px] outline-black-900_75 text-center text-xl"
                    shape="round"
                  >
                    View all
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] sm:h-[504px] md:h-[517px] h-[561px] inset-x-[0] mx-auto w-[97%] md:w-full">
            <div className="absolute flex flex-col gap-[25px] justify-start right-[0] top-[0] w-[43%]">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterMedium24Black900"
              >
                Friends
              </Text>
              <div className="bg-red-50 flex flex-col items-center justify-end ml-2.5 md:ml-[0] p-[9px] rounded-[18px] w-[99%] md:w-full">
                <div className="flex flex-col gap-[27px] items-start justify-start mt-[3px] w-full">
                  <List
                    className="flex flex-col gap-[11.5px] items-center w-[97%]"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                      <div className="h-[58px] relative w-[14%] sm:w-full">
                        <div className="bg-blue_gray-100 h-[58px] m-auto rounded-[31px] w-full"></div>
                        <Img
                          className="absolute h-12 inset-[0] justify-center m-auto w-[47px]"
                          src="images/img_claritypictureline.svg"
                          alt="claritypicturel"
                        />
                      </div>
                      <Text
                        className="sm:ml-[0] ml-[23px] text-black-900 text-center text-xl"
                        size="txtInterSemiBold20"
                      >
                        William Walker
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-[7px] min-w-[107px] sm:ml-[0] ml-[116px] sm:mt-0 mt-[11px] outline outline-[1px] outline-black-900_75 text-center text-xl"
                        shape="round"
                      >
                        Profile
                      </Button>
                    </div>
                    <Line className="self-center h-px bg-gray-400_01 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start my-0 w-full">
                      <div className="h-[58px] relative w-[14%] sm:w-full">
                        <div className="bg-blue_gray-100 h-[58px] m-auto rounded-[31px] w-full"></div>
                        <Img
                          className="absolute h-12 inset-[0] justify-center m-auto w-[47px]"
                          src="images/img_claritypictureline.svg"
                          alt="claritypicturel"
                        />
                      </div>
                      <Text
                        className="mb-3 sm:ml-[0] ml-[27px] sm:mt-0 mt-5 text-black-900 text-center text-xl"
                        size="txtInterSemiBold20"
                      >
                        Anna Clarke
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-[5px] min-w-[107px] sm:ml-[0] ml-[137px] sm:mt-0 mt-[13px] outline outline-[1px] outline-black-900_75 text-center text-xl"
                        shape="round"
                      >
                        Profile
                      </Button>
                    </div>
                  </List>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[107px] outline outline-[1px] outline-black-900_75 text-center text-xl"
                    shape="round"
                  >
                    View all
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0] w-[63%]">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterMedium24Black900"
              >
                Achievements
              </Text>
              <div className="bg-red-50_01 flex flex-col items-center justify-end mt-6 p-3 rounded-[18px] w-full">
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between mt-1.5 w-[99%] md:w-full">
                  <div className="bg-red-100_01 flex flex-col items-center justify-start p-1.5 rounded-[18px] w-[14%] md:w-full">
                    <Img
                      className="h-16"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-start w-[83%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start">
                        <Text
                          className="text-black-900 text-center text-xl"
                          size="txtInterMedium20"
                        >
                          Committed Reader
                        </Text>
                        <Line className="bg-gray-400_01 h-2 w-full" />
                      </div>
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtInterLight16"
                      >
                        2/3
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[15px] text-base text-black-900 text-center"
                      size="txtInterLight16"
                    >
                      Maintain a 3 day reading streak
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-red-50_01 flex flex-col items-center justify-end md:ml-[0] ml-[3px] mt-[27px] p-[11px] rounded-[18px] w-full">
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between mt-1.5 w-[99%] md:w-full">
                  <div className="bg-red-100_01 flex flex-col items-start justify-start p-[11px] rounded-[18px] w-[13%] md:w-full">
                    <Img
                      className="h-[61px] ml-1 md:ml-[0]"
                      src="images/img_ticket_blue_gray_900_01.svg"
                      alt="ticket_One"
                    />
                  </div>
                  <div className="flex flex-col justify-start w-[83%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[5px] w-full">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtInterMedium20"
                      >
                        Point Collector
                      </Text>
                      <Text
                        className="mt-1 text-base text-black-900 text-center"
                        size="txtInterLight16"
                      >
                        1200/3000
                      </Text>
                    </div>
                    <Line className="bg-gray-400_01 h-2 mr-[63px] mt-[23px] w-[90%]" />
                    <Text
                      className="md:ml-[0] ml-[19px] mt-3.5 text-base text-black-900 text-center"
                      size="txtInterLight16"
                    >
                      Earn 1800 more points
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
