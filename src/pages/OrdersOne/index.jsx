import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header1 from "components/Header1";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const OrdersOnePage = () => {
  const table7Data = React.useRef([
    {
      products: "Matrushakti",
      ordervalue: "₹4306",
      quantity: "43 Packets",
      orderid: "7535",
      expecteddeliverOne: "11/12/22",
      status: "Delayed",
    },
    {
      products: "Matru shakti",
      ordervalue: "₹4075",
      quantity: "36 Packets",
      orderid: "2775",
      expecteddeliverOne: "5/12/22",
      status: "Returned",
    },
    {
      products: "Rise",
      ordervalue: "₹5370",
      quantity: "5 Packets",
      orderid: "2427",
      expecteddeliverOne: "9/1/23",
      status: "Returned",
    },
    {
      products: "Powder",
      ordervalue: "₹4078",
      quantity: "23 Packets",
      orderid: "2757",
      expecteddeliverOne: "15/12/23",
      status: "Delayed",
    },
    {
      products: "other",
      ordervalue: "₹2055",
      quantity: "41 Packets",
      orderid: "2474",
      expecteddeliverOne: "11/11/22",
      status: "Delayed",
    },
  ]);
  const navigate = useNavigate();
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("products", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[201px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Products
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("ordervalue", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[196px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Order Value
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] pl-0.5 text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Quantity
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[163px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Order ID
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("expecteddeliverOne", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Expected Delivery
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pb-[35px] pt-8 text-orange-600 text-sm"
            size="txtInterMedium14Orange600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[62px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Status
          </Text>
        ),
      }),
    ];
  }, []);

  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_blue_gray_600.svg"
          alt="home"
        />
      ),
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
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_thumbsup_blue_600.svg"
          alt="thumbsup"
        />
      ),
      label: "Orders",
      href: "/orders",
      active: window.location.pathname === "/orders",
    },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 font-inter h-[982px] mx-auto pb-[22px] sm:pr-5 pr-[22px] relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[2%] top-[0] w-4/5">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-[97%] md:w-full">
              <Header1 className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-end p-4 rounded-lg w-[97%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start mt-1.5 w-[82%] md:w-full">
                <Text
                  className="text-blue_gray-800 text-xl"
                  size="txtInterMedium20"
                >
                  Overall Orders
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-2 w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-[108px]">
                    <Text
                      className="text-base text-blue-600 w-auto"
                      size="txtInterSemiBold16Blue600"
                    >
                      Total Orders
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600"
                      size="txtInterSemiBold16"
                    >
                      37
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtInterRegular14Bluegray400"
                    >
                      Last 7 days
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[55px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[55%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[188px]">
                      <Text
                        className="text-base text-yellow-800 w-auto"
                        size="txtInterSemiBold16Yellow800"
                      >
                        Total Received
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-row gap-[91px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-600"
                            size="txtInterSemiBold16"
                          >
                            32
                          </Text>
                          <Text
                            className="text-base text-blue_gray-600 w-auto"
                            size="txtInterSemiBold16"
                          >
                            ₹25000
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[47px] items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            Last 7 days
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            Revenue
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[99px] bg-blue_gray-50 w-px" />
                    <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[205px]">
                      <Text
                        className="text-base text-deep_purple-400 w-auto"
                        size="txtInterSemiBold16Deeppurple400"
                      >
                        Total Returned
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-blue_gray-600 w-auto"
                            size="txtInterSemiBold16"
                          >
                            5
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            Last 7 days
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtInterRegular14Bluegray400"
                          >
                            Cost
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-base text-red-300 w-auto"
                      size="txtInterSemiBold16Red300"
                    >
                      On the way
                    </Text>
                    <div className="flex flex-col items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterSemiBold16"
                      >
                        12
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Ordered
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 bottom-[2%] flex flex-col items-center justify-start md:px-5 py-[19px] right-[6%] rounded-lg w-[73%]">
          <div className="flex flex-col items-center justify-start mb-2 w-full">
            <div className="flex flex-col items-center justify-start pb-[41px] w-[97%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Text
                  className="mb-0.5 md:mt-0 mt-3 text-blue_gray-800 text-xl"
                  size="txtInterMedium20"
                >
                  Orders
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[116px] md:ml-[0] ml-[632px] text-center text-sm"
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Add Product
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[102px] ml-3 md:ml-[0]"
                  leftIcon={
                    <Img
                      className="h-5 mr-2"
                      src="images/img_filters_lines.svg"
                      alt="Filters lines"
                    />
                  }
                  shape="round"
                >
                  <div className="!text-blue_gray-600 font-medium text-left text-sm">
                    Filters
                  </div>
                </Button>
                <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[123px] text-center text-sm"
                    shape="round"
                    color="blue_gray_100_01"
                    variant="outline"
                  >
                    Order History
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[33px] w-full">
              <div className="overflow-auto md:ml-[0] ml-[17px] w-[92%]">
                <ReactTable
                  columns={table7Columns}
                  data={table7Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px w-full" />
              <Line className="bg-blue_gray-100_01 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[17px] mt-3.5 w-[93%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Purn shakti
                </Text>
                <Text
                  className="md:ml-[0] ml-[126px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹2557
                </Text>
                <Text
                  className="md:ml-[0] ml-[154px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  22 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[105px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  5724
                </Text>
                <Text
                  className="ml-32 md:ml-[0] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  21/12/22
                </Text>
                <Text
                  className="md:ml-[0] ml-[142px] text-blue-600 text-sm"
                  size="txtInterMedium14Blue600"
                >
                  Confirmed
                </Text>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[15px] w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[96%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Wheat
                </Text>
                <Text
                  className="md:ml-[0] ml-[157px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹5052
                </Text>
                <Text
                  className="md:ml-[0] ml-[155px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  14 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[109px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  2275
                </Text>
                <Text
                  className="md:ml-[0] ml-[125px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  8/12/22
                </Text>
                <Text
                  className="md:ml-[0] ml-[148px] text-green-A700_01 text-sm"
                  size="txtInterMedium14GreenA70001"
                >
                  Out for delivery
                </Text>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-3.5 w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[96%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Oil
                </Text>
                <Text
                  className="md:ml-[0] ml-[183px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹6065
                </Text>
                <Text
                  className="md:ml-[0] ml-[154px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  10 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[109px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  2578
                </Text>
                <Text
                  className="md:ml-[0] ml-[124px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  9/1/23
                </Text>
                <Text
                  className="md:ml-[0] ml-[156px] text-green-A700_01 text-sm"
                  size="txtInterMedium14GreenA70001"
                >
                  Out for delivery
                </Text>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-3.5 w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[93%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  drops
                </Text>
                <Text
                  className="md:ml-[0] ml-[162px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹3559
                </Text>
                <Text
                  className="md:ml-[0] ml-[153px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  43 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[109px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  3757
                </Text>
                <Text
                  className="md:ml-[0] ml-[125px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  6/6/23
                </Text>
                <Text
                  className="md:ml-[0] ml-[154px] text-blue-600 text-sm"
                  size="txtInterMedium14Blue600"
                >
                  Confirmed
                </Text>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-3.5 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-[61px] w-[97%] md:w-full">
                <Button
                  className="!text-blue_gray-400 border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[92px] text-center text-sm"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                >
                  Previous
                </Button>
                <Text
                  className="md:ml-[0] ml-[394px] md:mt-0 mt-[11px] text-blue_gray-400 text-sm"
                  size="txtInterRegular14Bluegray400"
                >
                  <span className="text-blue_gray-400 font-inter text-left font-normal">
                    Page{" "}
                  </span>
                  <span className="text-blue_gray-400 font-inter text-left font-medium">
                    1
                  </span>
                  <span className="text-blue_gray-400 font-inter text-left font-normal">
                    {" "}
                    of{" "}
                  </span>
                  <span className="text-blue_gray-400 font-inter text-left font-medium">
                    10
                  </span>
                </Text>
                <Button
                  className="!text-blue_gray-400 border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[66px] md:ml-[0] ml-[430px] text-center text-sm"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Sidebar11 className="!sticky !w-[280px] flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 top-[0]" />
        <div className="absolute bg-blue_gray-100_75 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-[86px] md:px-5 w-[96%]">
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-9 p-[22px] sm:px-5 rounded-lg w-2/5 md:w-full">
            <div className="flex flex-col items-start justify-start mt-[7px] w-[98%] md:w-full">
              <Text
                className="text-blue_gray-800 text-xl"
                size="txtInterMedium20"
              >
                New Order
              </Text>
              <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-[34px] w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Product Name
                </Text>
                <Input
                  name="input"
                  placeholder="Enter product name"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[84px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Product ID
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content"
                    placeholder="Enter product ID"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[94px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Category
                </Text>
                <Input
                  name="input_One"
                  placeholder="Select product category"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[69px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Order valiue
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_One"
                    placeholder="Enter order value"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[99px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Quantity
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Two"
                    placeholder="Enter product quantity"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-[133px] items-center justify-between mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Unit
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Three"
                    placeholder="Enter product unit"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[72px] items-center justify-start mt-6 w-[439px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Buying price
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[271px] sm:w-full">
                  <Input
                    name="content_Four"
                    placeholder="Enter buying price"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-12 items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Date of delivery
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Five"
                    placeholder="Enter date of delivery"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start mt-[25px] w-[59%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-400"
                  size="txtInterRegular16Bluegray400"
                >
                  Notify on the date of delivery
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[201px] mt-8 w-[54%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] text-base text-center w-[110px]"
                  onClick={() => navigate("/orders")}
                  shape="round"
                  color="blue_gray_50"
                  variant="outline"
                >
                  Discard
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[116px] text-center text-sm"
                  onClick={() => navigate("/orders")}
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Add Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersOnePage;
