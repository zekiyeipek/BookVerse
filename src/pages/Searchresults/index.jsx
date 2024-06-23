import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const SearchresultsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr"
        />
      ),
      label: "Less than $10",
    },
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_One"
        />
      ),
      label: "$10 to $20",
    },
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Two"
        />
      ),
      label: "$20 to $30",
    },
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Three"
        />
      ),
      label: "$30 and more",
    },
  ];
  const sideBarMenu1 = [
    {
      icon: (
        <Img
          className="h-6 mb-1 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Four"
        />
      ),
      label: "Any",
    },
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Five"
        />
      ),
      label: "Excellent",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Six"
        />
      ),
      label: "Very good",
    },
    {
      icon: (
        <Img
          className="h-6 rounded w-6"
          src="images/img_ggcheckr.svg"
          alt="ggcheckr_Seven"
        />
      ),
      label: "Fiction",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[377px] bg-blue_gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[153px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                src="images/img_rectangle10_119x167.png"
                alt="rectangleTen"
              />
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "9px 9px 9px 10px",
                  gap: "9px",
                  color: "#000000",
                  textAlign: "center",
                  fontWeight: 300,
                  fontSize: "14px",
                  borderRadius: "15px",
                  [`&:hover, &.ps-active`]: {
                    outlineColor: "#c7bebeff",
                    outlineWidth: "1px",
                    outlineStyle: "solid",
                    backgroundColor: "#fafafac4 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start pt-3 px-[18px] w-[91%]"
            >
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[29px] mx-auto"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <div className="flex flex-col mt-[-0.24px] mx-auto pb-[35px] w-full z-[1]">
                  <Text
                    className="mx-auto text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtInterRegular24"
                  >
                    Search Results
                  </Text>
                  <MenuItem>
                    <div className="flex flex-col items-start justify-end z-[1]">
                      <Text className="ml-1 md:ml-[0] text-[15px]">Books</Text>
                      <div className="flex flex-row gap-[13px] items-end justify-start mt-[3px] p-[7px] w-full">
                        <Img
                          className="h-[29px] ml-[5px]"
                          src="images/img_television.svg"
                          alt="television"
                        />
                        <Text className="font-light mt-2.5 text-[15px] text-black-900 text-center">
                          Search for books, authors, or genres
                        </Text>
                      </div>
                    </div>
                  </MenuItem>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <MenuItem>
                  <div className="flex flex-row items-center justify-start">
                    <Text className="my-2 text-[15px]">Check-in date</Text>
                  </div>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[26px] mb-[7px] w-[26px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                >
                  <Text className="text-[15px]">Select a date</Text>
                </MenuItem>
              </div>
              <Text
                className="mt-4 text-[15px] text-black-900 text-center"
                size="txtInterLight15"
              >
                Readers
              </Text>
              <div className="h-[53px] md:h-[60px] mt-[7px] relative w-full">
                <div className="bg-gray-50_c4 flex flex-col h-full items-center justify-end mx-auto outline outline-[1px] outline-gray-400 py-[7px] rounded-[15px] w-full">
                  <Text
                    className="mt-[9px] text-[15px] text-black-900 text-center"
                    size="txtInterLight15"
                  >
                    1 reader, 1 book
                  </Text>
                </div>
                <Img
                  className="absolute h-[53px] inset-[0] justify-center m-auto"
                  src="images/img_fagroup_blue_gray_900_01.svg"
                  alt="fagroup"
                />
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[340px] mt-[13px] rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="red_400"
                size="xs"
              >
                Search Books
              </Button>
              <div className="flex flex-col gap-[11px] items-center justify-start mt-[22px] w-full">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterSemiBold20"
                >
                  Price per Book
                </Text>
                <div className="flex flex-col gap-[-10px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-end mt-[23px] w-full">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterSemiBold20"
                >
                  Book rating
                </Text>
                <div className="flex flex-col gap-[-11.45px] items-center justify-start w-full">
                  {sideBarMenu1?.map((menu, i) => (
                    <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
              </div>
            </Menu>
            {!collapsed && (
              <Text
                className="md:ml-[0] ml-[38px] mr-[207px] mt-9 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterSemiBold24Black900"
              >
                Book genre
              </Text>
            )}
            {!collapsed && (
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[46px] md:ml-[0] ml-[25px] mr-[74px] mt-3 w-[74%]">
                <Text
                  className="bg-gray-100 h-[25px] justify-center outline outline-[1px] outline-gray-300_01 px-1.5 py-0.5 rounded-[9px] text-base text-black-900 text-center w-[83px]"
                  size="txtInterLight16"
                >
                  Romance
                </Text>
                <Text
                  className="bg-gray-100 h-[25px] justify-center ml-4 sm:ml-[0] outline outline-[1px] outline-gray-300_01 px-[11px] py-0.5 rounded-[9px] text-base text-black-900 text-center w-[83px]"
                  size="txtInterLight16"
                >
                  Mystery
                </Text>
                <Text
                  className="bg-gray-100 h-[25px] justify-center sm:ml-[0] ml-[13px] outline outline-[1px] outline-gray-300_01 px-[11px] py-0.5 rounded-[9px] text-base text-black-900 text-center w-[83px]"
                  size="txtInterLight16"
                >
                  Fantasy
                </Text>
              </div>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col justify-start w-full">
            <div className="flex flex-row gap-[11px] items-center justify-end md:ml-[0] ml-[904px] w-[10%] md:w-full">
              <Img
                className="h-[37px]"
                src="images/img_tdesignnotificationfilled.svg"
                alt="tdesignnotifica"
              />
              <Img
                className="h-[38px]"
                src="images/img_iconoirprofilecircle.svg"
                alt="iconoirprofilec"
              />
            </div>
            <Line className="bg-blue_gray-100_02 h-px mt-[25px] w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[34px] mt-[19px] w-[96%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start">
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtInterLight16"
                >
                  Showing 140 results for
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterSemiBold24Black900"
                >
                  Books in Bookish, Dec 9 - 12, 1 reader, 1 book
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-row gap-9 items-start justify-between mb-[3px] md:mt-0 mt-4 outline outline-[1px] outline-red-100 p-1 rounded-[20px] w-[16%] md:w-full">
                <Text
                  className="ml-2 mt-1.5 text-black-900 text-center text-xl"
                  size="txtInterLight20"
                >
                  Sort by
                </Text>
                <Img
                  className="h-[18px] mr-0.5 mt-2"
                  src="images/img_riarrowdropdownline.svg"
                  alt="riarrowdropdown"
                />
              </div>
            </div>
            <div className="bg-deep_orange-50 flex md:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[22px] mr-[7px] mt-[59px] p-2.5 rounded-[16px] w-[98%] md:w-full">
              <Img
                className="h-[164px] ml-2 md:ml-[0]"
                src="images/img_heroiconsphoto.svg"
                alt="heroiconsphoto"
              />
              <div className="md:h-[177px] h-[182px] md:mt-0 mt-1.5 relative w-[78%] md:w-full">
                <div className="absolute md:h-[177px] h-[178px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-col gap-[57px] h-max inset-[0] justify-center m-auto w-full">
                    <div className="flex flex-col items-start justify-start mr-[485px]">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtInterLight20"
                      >
                        The Mysterious Bookshop
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-1.5 text-[15px] text-black-900 text-center"
                        size="txtInterLight15"
                      >
                        0.4 km from city centre
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-[9px] text-[15px] text-black-900 text-center"
                        size="txtInterLight15"
                      >
                        Free Preview Available
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[198px] md:ml-[0] ml-[530px] rounded-[12px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="red_400"
                      size="xs"
                    >
                      More Options
                    </Button>
                  </div>
                  <div className="absolute bottom-[20%] flex flex-col items-center justify-start left-[0]">
                    <Text
                      className="text-[15px] text-black-900 text-center"
                      size="txtInterMedium15"
                    >
                      Thriller Novel
                    </Text>
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtInterLight15"
                    >
                      <>
                        1x Paperback <br />
                        1x eBook
                      </>
                    </Text>
                  </div>
                  <Text
                    className="absolute left-[24%] text-[15px] text-black-900 text-center top-[34%]"
                    size="txtInterLight15"
                  >
                    Paperback Edition
                  </Text>
                  <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtInterSemiBold16"
                    >
                      Highly Recommended
                    </Text>
                    <Text
                      className="mt-1 text-base text-black-900 text-center"
                      size="txtInterLight16"
                    >
                      1,920 ratings
                    </Text>
                    <Text
                      className="bg-gray-100 h-[25px] justify-center mr-[437px] mt-[104px] outline outline-[1px] outline-gray-300_01 px-3.5 py-0.5 rounded-[9px] text-base text-black-900 text-center w-[98px]"
                      size="txtInterLight16"
                    >
                      #Popular
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute bg-red-400 h-[39px] justify-center pb-0.5 pt-1.5 px-3 right-[0] rounded-[12px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl top-[0] w-[62px]"
                  size="txtInterMedium24"
                >
                  9.6
                </Text>
                <Text
                  className="absolute bg-gray-100 bottom-[3%] h-[25px] justify-center left-[0] outline outline-[1px] outline-gray-300_01 px-[7px] py-0.5 rounded-[9px] text-base text-black-900 text-center w-[98px]"
                  size="txtInterLight16"
                >
                  #Best Deal
                </Text>
                <Text
                  className="absolute h-max inset-y-[0] my-auto right-[0] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtInterMedium24Black900"
                >
                  $15.99
                </Text>
                <Text
                  className="absolute bottom-[30%] right-[0] text-base text-black-900 text-center"
                  size="txtInterMedium16"
                >
                  3 days, 1 reader
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center md:ml-[0] ml-[371px] mt-[531px] w-[23%] md:w-full">
              <Text
                className="bg-red-400 flex h-[29px] items-center justify-center rounded-[14px] text-center text-white-A700 text-xl w-[29px]"
                size="txtInterSemiBold20WhiteA700"
              >
                1
              </Text>
              <Text
                className="ml-4 mt-[3px] text-blue_gray-900_01 text-center text-xl"
                size="txtInterSemiBold20Bluegray90001"
              >
                2
              </Text>
              <Text
                className="ml-6 mt-[3px] text-blue_gray-900_01 text-center text-xl"
                size="txtInterSemiBold20Bluegray90001"
              >
                3
              </Text>
              <Text
                className="ml-6 text-blue_gray-900_01 text-center text-xl"
                size="txtInterSemiBold20Bluegray90001"
              >
                4
              </Text>
              <Text
                className="ml-6 mt-[5px] text-blue_gray-900_01 text-center text-xl"
                size="txtInterSemiBold20Bluegray90001"
              >
                ...
              </Text>
              <Text
                className="ml-6 text-blue_gray-900_01 text-center text-xl"
                size="txtInterSemiBold20Bluegray90001"
              >
                20
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchresultsPage;
