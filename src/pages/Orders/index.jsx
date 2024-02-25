import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header1 from "components/Header1";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const OrdersPage = () => {
  const table6Data = React.useRef([
    {
      products: "Matrushakti",
      quantity: "43 Packets",
      orderid: "7535",
      expecteddeliverOne: "11/12/22",
      status: "Delayed",
    },
    {
      products: "Matru shakti",
      quantity: "36 Packets",
      orderid: "2775",
      expecteddeliverOne: "5/12/22",
      status: "Returned",
    },
    {
      products: "Rise",
      quantity: "5 Packets",
      orderid: "2427",
      expecteddeliverOne: "9/1/23",
      status: "Returned",
    },
    {
      products: "Powder",
      quantity: "23 Packets",
      orderid: "2757",
      expecteddeliverOne: "15/12/23",
      status: "Delayed",
    },
    {
      products: "other",
      quantity: "41 Packets",
      orderid: "2474",
      expecteddeliverOne: "11/11/22",
      status: "Delayed",
    },
  ]);
  const navigate = useNavigate();
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [
      table6ColumnHelper.accessor("products", {
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
            className="min-w-[397px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Products
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("quantity", {
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
      table6ColumnHelper.accessor("orderid", {
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
      table6ColumnHelper.accessor("expecteddeliverOne", {
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
      table6ColumnHelper.accessor("status", {
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
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[22px] sm:pr-5 pr-[22px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[23px] items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-[97%] md:w-full">
              <Header1 className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="flex flex-col gap-[22px] items-start justify-start w-[97%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end p-4 rounded-lg w-full">
                <div className="flex flex-col gap-6 items-start justify-start mt-1.5 w-[95%] md:w-full">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Overall Orders
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-2 w-full">
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
                      className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[70px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] md:ml-[0] ml-[109px] w-[39%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-3 items-start justify-start w-[158px]">
                        <Text
                          className="text-base text-yellow-800 w-auto"
                          size="txtInterSemiBold16Yellow800"
                        >
                          Total Received
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-[21px]">
                            <Text
                              className="text-base text-blue_gray-600"
                              size="txtInterSemiBold16"
                            >
                              32
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[92px]">
                            <Text
                              className="text-blue_gray-400 text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              Last 7 days
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-[99px] bg-blue_gray-50 w-px" />
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-base text-deep_purple-400 w-auto"
                          size="txtInterSemiBold16Deeppurple400"
                        >
                          Total Returned
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-[33px]">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              5
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-between w-full">
                            <Text
                              className="text-blue_gray-400 text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              Last 7 days
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[201px] w-[235px]">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start py-[19px] rounded-lg w-[95%] md:w-full">
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
                        className="common-pointer cursor-pointer font-medium min-w-[116px] md:ml-[0] ml-[632px] text-center text-sm"
                        onClick={() => navigate("/ordersone")}
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
                        columns={table6Columns}
                        data={table6Data.current}
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
                        className="md:ml-[0] ml-[322px] text-blue_gray-700 text-sm"
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
                        className="md:ml-[0] ml-[355px] text-blue_gray-700 text-sm"
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
                        className="md:ml-[0] ml-[381px] text-blue_gray-700 text-sm"
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
                        className="md:ml-[0] ml-[358px] text-blue_gray-700 text-sm"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
