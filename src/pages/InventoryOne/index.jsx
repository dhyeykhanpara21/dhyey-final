import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const InventoryOnePage = () => {
  const table2Data = React.useRef([
    {
      productsOne: "Purn Shakti",
      buyingprice: "₹257",
      quantity: "22 Packets",
      thresholdvalue: "12 Packets",
      expirydate: "21/12/22",
      availability: "Out of stock",
    },
    {
      productsOne: "Wheat",
      buyingprice: "₹502",
      quantity: "14 Packets",
      thresholdvalue: "6 Packets",
      expirydate: "8/12/22",
      availability: "Out of stock",
    },
  ]);
  const table3Data = React.useRef([
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("productsOne", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-700 text-sm"
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
      table2ColumnHelper.accessor("buyingprice", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-700 text-sm"
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
            Buying Price
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Quantity
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("thresholdvalue", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[213px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Threshold Value
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("expirydate", {
        cell: (info) => (
          <Text
            className="py-[35px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Expiry Date
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("availability", {
        cell: (info) => (
          <Text
            className="py-[35px] text-red-600 text-sm"
            size="txtInterMedium14Red600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[83px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Availability
          </Text>
        ),
      }),
    ];
  }, []);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [];
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
          src="images/img_settings.svg"
          alt="settings"
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

  return (
    <>
      <div className="bg-blue_gray-50 font-inter h-[982px] mx-auto pb-[22px] sm:pr-5 pr-[22px] relative w-full">
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[2%] top-[0] w-4/5">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-[97%] md:w-full">
              <Header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="h-[188px] md:h-[922px] md:pr-10 sm:pr-5 pr-[58px] relative w-[97%] md:w-full">
              <div className="bg-white-A700 h-[188px] my-auto rounded-lg w-[95%]"></div>
              <div className="absolute bottom-[9%] flex flex-col gap-[22px] items-start justify-start left-[1%] w-[93%]">
                <Text
                  className="text-blue_gray-800 text-xl"
                  size="txtInterMedium20"
                >
                  Overall Inventory
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-[108px]">
                    <Text
                      className="text-base text-blue-600 w-auto"
                      size="txtInterSemiBold16Blue600"
                    >
                      Categories
                    </Text>
                    <Text
                      className="text-base text-blue_gray-600"
                      size="txtInterSemiBold16"
                    >
                      14
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtInterRegular14Bluegray400"
                    >
                      Last 7 days
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-50 h-[99px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-3 items-start justify-start w-[188px]">
                    <Text
                      className="text-base text-yellow-800 w-auto"
                      size="txtInterSemiBold16Yellow800"
                    >
                      Total Products
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <div className="flex flex-row gap-[91px] items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-600 w-auto"
                          size="txtInterSemiBold16"
                        >
                          868
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
                  <Line className="bg-blue_gray-50 h-[99px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-3 items-start justify-start w-[205px]">
                    <Text
                      className="text-base text-deep_purple-400 w-auto"
                      size="txtInterSemiBold16Deeppurple400"
                    >
                      Top Selling
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
                  <Line className="bg-blue_gray-50 h-[99px] md:h-px md:w-full w-px" />
                  <div className="flex flex-col gap-3 items-start justify-start w-[235px]">
                    <Text
                      className="text-base text-red-300 w-auto"
                      size="txtInterSemiBold16Red300"
                    >
                      Low Stocks
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterSemiBold16"
                      >
                        12
                      </Text>
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterSemiBold16"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[95px] items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Ordered
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Not in stock
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 bottom-[4%] flex flex-col items-center justify-end md:px-5 py-3 right-[6%] rounded-lg w-[73%]">
          <div className="flex flex-col items-center justify-start mt-[7px] w-full">
            <div className="flex flex-col items-center justify-start pb-[41px] w-[98%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                <Text
                  className="mb-[3px] sm:mt-0 mt-[11px] text-blue_gray-800 text-xl"
                  size="txtInterMedium20"
                >
                  Products
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[618px] text-center text-sm"
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Add Product
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[102px] ml-3 sm:ml-[0]"
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
                <Button
                  className="!text-blue_gray-600 cursor-pointer font-medium min-w-[118px] ml-3 sm:ml-[0] text-center text-sm"
                  shape="round"
                >
                  Download all
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-[33px] w-full">
              <div className="overflow-auto w-[96%]">
                <ReactTable
                  columns={table2Columns}
                  data={table2Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <div className="overflow-auto w-[95%]">
                <ReactTable
                  columns={table3Columns}
                  data={table3Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-blue_gray-100_01 h-px w-full" />
              <Line className="bg-blue_gray-100_01 h-px w-full" />
              <Line className="bg-blue_gray-100_01 h-px w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-3.5 w-[96%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Powder
                </Text>
                <Text
                  className="md:ml-[0] ml-[150px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹408
                </Text>
                <Text
                  className="md:ml-[0] ml-[162px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  23 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[109px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  7 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[143px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  15/12/23
                </Text>
                <Text
                  className="md:ml-[0] ml-[117px] text-red-600 text-sm"
                  size="txtInterMedium14Red600"
                >
                  Out of stock
                </Text>
              </div>
              <Line className="bg-blue_gray-100_01 h-px mt-[15px] w-full" />
              <Line className="bg-blue_gray-100_01 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3.5 w-[95%] md:w-full">
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Drop
                </Text>
                <Text
                  className="md:ml-[0] ml-[168px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  ₹205
                </Text>
                <Text
                  className="md:ml-[0] ml-[163px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  41 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[105px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  10 Packets
                </Text>
                <Text
                  className="md:ml-[0] ml-[140px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  11/11/22
                </Text>
                <Text
                  className="md:ml-[0] ml-[122px] text-sm text-yellow-800_01"
                  size="txtInterMedium14Yellow80001"
                >
                  Low stock
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] w-[97%] md:w-full">
                <Button
                  className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[92px] text-center text-sm"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                >
                  Previous
                </Button>
                <Text
                  className="md:ml-[0] ml-[394px] md:mt-0 mt-[11px] text-blue_gray-700 text-sm"
                  size="txtInterRegular14Bluegray700"
                >
                  <span className="text-blue_gray-700 font-inter text-left font-normal">
                    Page{" "}
                  </span>
                  <span className="text-blue_gray-700 font-inter text-left font-medium">
                    1
                  </span>
                  <span className="text-blue_gray-700 font-inter text-left font-normal">
                    {" "}
                    of{" "}
                  </span>
                  <span className="text-blue_gray-700 font-inter text-left font-medium">
                    10
                  </span>
                </Text>
                <Button
                  className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[66px] md:ml-[0] ml-[430px] text-center text-sm"
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
        <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start my-auto overflow-auto md:px-5 top-[0]" />
        <div className="absolute bg-blue_gray-100_75 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-9 md:px-5 w-[96%]">
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-[86px] p-7 sm:px-5 rounded-lg w-[37%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
              <Text
                className="text-blue_gray-800 text-xl"
                size="txtInterMedium20"
              >
                New Product
              </Text>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[114px] mt-3.5 w-[49%] md:w-full">
                <div className="flex flex-row gap-5 items-end justify-between w-full">
                  <div className="bg-white-A700 h-[81px] outline-[1px] outline-dashed outline-gray-500 rounded-[10px] w-[81px]"></div>
                  <div className="flex flex-col items-center justify-start mb-1 mt-4">
                    <Text
                      className="text-blue_gray-400 text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      Drag image here
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray-400 text-sm"
                      size="txtInterRegular14Bluegray400"
                    >
                      or
                    </Text>
                    <Text
                      className="mt-[5px] text-blue-A200 text-sm"
                      size="txtInterRegular14BlueA200"
                    >
                      Browse image
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-8 w-auto sm:w-full">
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
                  Buying Price
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_One"
                    placeholder="Enter buying price"
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
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[78px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Expiry Date
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Four"
                    placeholder="Enter expiry date"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Threshold Value
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Five"
                    placeholder="Enter threshold value"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[201px] mt-8 w-[55%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] text-base text-center w-[110px]"
                  onClick={() => navigate("/inventory")}
                  shape="round"
                  color="blue_gray_50"
                  variant="outline"
                >
                  Discard
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[116px] text-center text-sm"
                  onClick={() => navigate("/inventory")}
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

export default InventoryOnePage;
