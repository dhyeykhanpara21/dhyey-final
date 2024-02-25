import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const InventoryPage = () => {
  const tableData = React.useRef([
    {
      productsOne: "Bal Shakti",
      quantity: "22 Packets",
      thresholdvalue: "12 Packets",
      expirydate: "21/12/22",
      availability: "Out of stock",
    },
    {
      productsOne: "Wheat",
      quantity: "14 Packets",
      thresholdvalue: "6 Packets",
      expirydate: "8/12/22",
      availability: "Out of stock",
    },
  ]);
  const table1Data = React.useRef([
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
    { "": "In- stock" },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("productsOne", {
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
            className="min-w-[397px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Products
          </Text>
        ),
      }),
      tableColumnHelper.accessor("quantity", {
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
      tableColumnHelper.accessor("thresholdvalue", {
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
      tableColumnHelper.accessor("expirydate", {
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
      tableColumnHelper.accessor("availability", {
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
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [];
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
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-center justify-start mx-auto pb-[22px] sm:pr-5 pr-[22px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-[22px] items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-[97%] md:w-full">
              <Header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="flex flex-col gap-[22px] items-start justify-start w-[97%] md:w-full">
              <div className="h-[188px] md:h-[521px] md:pr-10 sm:pr-5 pr-[58px] relative w-full">
                <div className="bg-white-A700 h-[188px] my-auto rounded-lg w-[95%]"></div>
                <div className="absolute bottom-[9%] flex flex-col gap-[22px] items-start justify-start left-[1%] w-[93%]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Overall Inventory
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-2 w-full">
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
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[55px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[48%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[188px]">
                        <Text
                          className="text-base text-yellow-800 w-auto"
                          size="txtInterSemiBold16Yellow800"
                        >
                          Total Products
                        </Text>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-base text-blue_gray-600 w-auto"
                              size="txtInterSemiBold16"
                            >
                              868
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
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
                      <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-[205px]">
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
                    </List>
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
              <div className="bg-white-A700 flex flex-col items-center justify-end ml-0.5 md:ml-[0] py-3 rounded-lg w-[95%] md:w-full">
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
                        className="common-pointer cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[618px] text-center text-sm"
                        onClick={() => navigate("/inventoryone")}
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
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={""}
                        headerClass=""
                      />
                    </div>
                    <div className="overflow-auto w-[95%]">
                      <ReactTable
                        columns={table1Columns}
                        data={table1Data.current}
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
                        className="md:ml-[0] ml-[347px] text-blue_gray-700 text-sm"
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
                        className="md:ml-[0] ml-[366px] text-blue_gray-700 text-sm"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPage;
