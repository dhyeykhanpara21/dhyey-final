import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />,
      label: "Dashobard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_cursor.svg"
          alt="cursor"
        />
      ),
      label: "Inventory",
      href: "/inventory",
      active: window.location.pathname === "/inventory",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_frame8.svg"
          alt="frameEight"
        />
      ),
      label: "Suppliers",
      href: "/suppliers",
      active: window.location.pathname === "/suppliers",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_reply.svg" alt="reply" />,
      label: "Orders",
      href: "/orders",
      active: window.location.pathname === "/orders",
    },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-start justify-end mx-auto md:pr-10 sm:pr-5 pr-[72px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <Img
              className="h-[139px] md:h-auto ml-9 mr-6 mt-7 object-cover w-[220px]"
              src="images/img_addasubheading.png"
              alt="addasubheading"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingRight: "14px",
                  gap: "16px",
                  color: "#5d6679",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderRadius: "8px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  [`&:hover, &.ps-active`]: { color: "#156fee" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[66px] mt-[42px] pt-[18px] px-10 sm:px-5 w-[72%]"
            >
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col items-center justify-end mt-[433px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-[3px] w-6"
                      src="images/img_logout.svg"
                      alt="logout"
                    />
                  }
                >
                  <Text className="w-auto">Log Out</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1160px] sm:px-5 px-8 w-full">
                <Input
                  name="searchbar"
                  placeholder="Search product, supplier, order"
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                  wrapClassName="flex sm:flex-1 rounded sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-2 my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#858d9d"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setSearchbarvalue("")}
                      style={{
                        visibility:
                          searchbarvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                  color="blue_gray_50"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="h-10 relative w-[10%] sm:w-full">
                  <div className="absolute flex flex-row gap-[21px] h-full inset-[0] items-center justify-between m-auto w-auto">
                    <div className="flex flex-col items-start justify-start p-2 w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_andreyzvyagint.png"
                        alt="andreyzvyagint"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-10">
                    <div className="flex flex-col items-start justify-start p-2 w-10">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-center justify-start w-[95%] md:w-full">
              <List
                className="flex flex-col gap-[22px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <div
                    className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[63%] md:w-full"
                    onClick={() => navigate("/inventory")}
                  >
                    <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-1.5 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Sales Overview
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col gap-3 items-center justify-start w-[116px]">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_sales.svg"
                            alt="sales"
                          />
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                {" "}
                                Sales
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[163px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="deep_purple_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_vector.svg" alt="vector" />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                {" "}
                                Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[117px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="orange_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[25px]"
                              src="images/img_vector_deep_orange_300.svg"
                              alt="vector_One"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                {" "}
                                Profit
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start w-[131px]">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cost.svg"
                            alt="cost"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Cost
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-start justify-end pt-4 px-4 rounded-lg w-[36%] md:w-full"
                    onClick={() => navigate("/inventory")}
                  >
                    <div className="flex flex-col gap-4 justify-start mt-2 w-[93%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Inventory Summary
                      </Text>
                      <div className="flex flex-row items-start justify-start ml-3 md:ml-[0] w-[97%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              868
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Quantity in Hand
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[91px] ml-[39px] mt-1.5 w-px" />
                        <div className="flex flex-col gap-2 items-center justify-start ml-[63px] w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_ontheway.svg"
                            alt="ontheway"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              200
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              To be received
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-[63%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-1.5 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Purchase Overview
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex flex-col gap-3 items-center justify-start w-[116px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="blue_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_bag.svg" alt="bag" />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Purchase
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] md:h-px md:ml-[0] ml-[30px] md:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[30px] w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cost.svg"
                            alt="cost"
                          />
                          <div className="flex flex-col items-start justify-start w-[129px]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                {" "}
                                Cost
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] md:h-px md:ml-[0] ml-[37px] md:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[52px] w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_cancel.svg"
                            alt="cancel"
                          />
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Cancel
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[66px] md:h-px md:ml-[0] ml-[55px] md:w-full w-px" />
                        <div className="flex flex-col gap-3 items-center justify-start ml-7 md:ml-[0] w-[131px]">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="orange_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[25px]"
                              src="images/img_vector_deep_orange_300.svg"
                              alt="vector"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-500_01 text-sm w-auto"
                                size="txtInterMedium14Bluegray50001"
                              >
                                Return
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-center justify-end pt-4 px-4 rounded-lg w-[36%] md:w-full"
                    onClick={() => navigate("/orders")}
                  >
                    <div className="flex flex-col gap-4 items-start justify-start mt-2 w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Product Summary
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Button
                            className="flex h-[30px] items-center justify-center w-[30px]"
                            shape="round"
                            color="light_blue_50"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[21px]"
                              src="images/img_search_light_blue_400.svg"
                              alt="search"
                            />
                          </Button>
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              31
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Number of Suppliers
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-50 h-[91px] mt-1.5 w-px" />
                        <div className="flex flex-col gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-[30px] rounded w-[30px]"
                            src="images/img_categories.svg"
                            alt="categories"
                          />
                          <div className="flex flex-col gap-0.5 items-center justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              21
                            </Text>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtInterMedium14Gray800"
                            >
                              Number of Categories
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-[63%] md:w-full">
                  <div className="flex flex-col items-center justify-start my-2 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="mt-0.5 text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Sales & Purchase
                      </Text>
                      <Button
                        className="border border-blue_gray-100_01 border-solid cursor-pointer flex items-center justify-center min-w-[115px]"
                        leftIcon={
                          <div className="h-5 mr-2 w-5 bg-blue_gray-600">
                            <Img
                              className="h-5"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                          </div>
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-blue_gray-600 font-medium text-left text-sm">
                          Monthly
                        </div>
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-6 w-[90%] md:w-full">
                      <div className="flex flex-col gap-[22px] items-end justify-start w-auto">
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          60,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          50,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          40,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          30,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          20,000
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-xs w-auto"
                          size="txtInterRegular12"
                        >
                          10,000
                        </Text>
                      </div>
                      <div className="h-[205px] relative w-[92%] sm:w-full">
                        <Img
                          className="absolute h-[205px] inset-[0] m-auto w-[542px]"
                          src="images/img_lines.svg"
                          alt="lines"
                        />
                        <Img
                          className="absolute h-[198px] inset-y-[0] my-auto right-[4%] w-[473px]"
                          src="images/img_graph.svg"
                          alt="graph"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-7 items-start justify-start w-[478px] sm:w-full">
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jan
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Feb
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Mar
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Apr
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        May
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jun
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jul
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Aug
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        May
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-xs w-auto"
                        size="txtInterRegular12Bluegray400"
                      >
                        Jun
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[13px] w-[24%] md:w-full">
                      <div className="bg-gradient  h-[15px] rotate-[-180deg] rounded-[7px] w-[15px]"></div>
                      <Text
                        className="ml-2 text-blue_gray-500_01 text-xs"
                        size="txtInterRegular12"
                      >
                        Purchase
                      </Text>
                      <div className="bg-gradient1  h-[15px] ml-[23px] rotate-[180deg] rounded-[7px] w-[15px]"></div>
                      <Text
                        className="ml-[7px] text-blue_gray-500_01 text-xs"
                        size="txtInterRegular12"
                      >
                        Sales
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-1.5 rounded-[10px] w-[36%] md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start mb-2 mt-[18px] w-[98%] md:w-full">
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtInterMedium20"
                    >
                      Order Summary
                    </Text>
                    <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                      <div className="flex flex-col gap-8 items-end justify-start w-[9%]">
                        <div className="flex flex-col gap-[26px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            4000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            3000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            2000
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            1000
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtInterRegular12Bluegray400"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[90%]">
                        <Img
                          className="h-[226px] md:h-auto object-cover"
                          src="images/img_data.png"
                          alt="data"
                        />
                        <div className="flex flex-row gap-4 items-start justify-between md:ml-[0] ml-[3px] mt-1.5 w-[322px]">
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            Jan
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            Feb
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            Mar
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            Apr
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtInterRegular12Bluegray400"
                          >
                            May
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[71px] mt-2.5 w-[49%] md:w-full">
                          <div className="bg-deep_orange-300 h-[15px] rounded-[7px] w-[15px]"></div>
                          <Text
                            className="ml-1 text-blue_gray-500_01 text-xs"
                            size="txtInterRegular12"
                          >
                            Ordered
                          </Text>
                          <div className="bg-blue-100 h-[15px] ml-[19px] rounded-[7px] w-[15px]"></div>
                          <Text
                            className="ml-1 text-blue_gray-500_01 text-xs"
                            size="txtInterRegular12"
                          >
                            Delivered
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[64%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end py-[22px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-5 items-center justify-start mt-0.5 w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                        <Text
                          className="text-blue_gray-800 text-xl"
                          size="txtInterMedium20"
                        >
                          Top Selling Stock
                        </Text>
                        <a href="javascript:" className="text-blue-900 text-sm">
                          <Text size="txtInterRegular14Blue900">See All</Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Line className="bg-blue_gray-50 h-px w-full" />
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-4 md:ml-[0] mt-3 w-[92%] md:w-full">
                          <Text
                            className="text-blue_gray-600 text-sm"
                            size="txtInterMedium14Bluegray600"
                          >
                            Name
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[221px] text-blue_gray-600 text-sm"
                            size="txtInterMedium14Bluegray600"
                          >
                            Sold Quantity
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[146px] text-blue_gray-600 text-sm"
                            size="txtInterMedium14Bluegray600"
                          >
                            {" "}
                            Remaining Quantity
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-50 h-px mt-[11px] w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[22px] w-[86%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-800"
                            size="txtInterRegular16Bluegray800"
                          >
                            Purnshakti
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[209px] text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            30
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[38px] text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            {" "}
                            12
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-50 h-px mt-[18px] w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[22px] w-[86%] md:w-full">
                          <Text
                            className="text-gray-700 text-shadow-ts text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            Rice
                          </Text>
                          <Text
                            className="leading-[20.00px] sm:ml-[0] ml-[258px] text-gray-700 text-sm w-[3%] sm:w-full"
                            size="txtInterMedium14Gray700"
                          >
                            21
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[43px] text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            {" "}
                            15
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-50 h-px mt-3.5 w-full" />
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[22px] w-[86%] md:w-full">
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            Oil
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[268px] text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            19
                          </Text>
                          <Text
                            className="ml-11 sm:ml-[0] text-gray-700 text-sm"
                            size="txtInterMedium14Gray700"
                          >
                            {" "}
                            17
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[309px] items-center justify-end p-2.5 w-[36%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group24.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mt-[13px] w-[98%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                      <Text
                        className="text-blue_gray-800 text-xl"
                        size="txtInterMedium20"
                      >
                        Low Quantity Stock
                      </Text>
                      <a
                        href="javascript:"
                        className="mt-[3px] text-blue-900 text-sm"
                      >
                        <Text size="txtInterRegular14Blue900">See All</Text>
                      </a>
                    </div>
                    <div className="flex flex-row gap-[26px] items-center justify-start mt-3.5 w-auto">
                      <Img
                        className="h-16 md:h-auto object-cover w-12"
                        src="images/img_521.png"
                        alt="FiveHundredTwentyOne"
                      />
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-800 w-auto"
                          size="txtInterSemiBold16Bluegray800"
                        >
                          Purnshakti
                        </Text>
                        <Text
                          className="text-blue_gray-500_01 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Remaining Quantity : 10 Packet
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer font-medium min-w-[38px] rounded-[11px] text-center text-xs"
                          color="red_50"
                          size="xs"
                          variant="fill"
                        >
                          Low
                        </Button>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-[25px] items-center mt-[22px] w-[97%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                        <Img
                          className="h-16 md:h-auto object-cover w-[43px]"
                          src="images/img_new1.png"
                          alt="newOne"
                        />
                        <div className="flex flex-col gap-1 h-12 md:h-auto items-start justify-start w-[205px]">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16Bluegray800"
                          >
                            Matrushakti
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Remaining Quantity : 15 Packet
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-red-50 justify-center px-[7px] py-0.5 rounded-[11px] text-center text-red-900 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Low
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[25px] items-center justify-between w-[343px]">
                        <Img
                          className="h-[60px] md:h-auto object-cover w-[53px]"
                          src="images/img_new21.png"
                          alt="newTwentyOne"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-800 w-auto"
                            size="txtInterSemiBold16Bluegray800"
                          >
                            Balshakti
                          </Text>
                          <Text
                            className="text-blue_gray-500_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            Remaining Quantity : 15 Packet
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-red-50 justify-center px-[7px] py-0.5 rounded-[11px] text-center text-red-900 text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            Low
                          </Text>
                        </div>
                      </div>
                    </List>
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

export default DashboardPage;
