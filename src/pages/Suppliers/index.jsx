import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import Header1 from "components/Header1";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const SuppliersPage = () => {
  const table4Data = React.useRef([
    {
      suppliername: "Mukesh bhai",
      product: "Kit Kat",
      contactnumber: "7687764556",
      email: "richard@gmail.com",
      type: "Taking Return",
      ontheway: "13",
    },
    {
      suppliername: "Ramesh bhai",
      product: "Maaza",
      contactnumber: "9867545368",
      email: "tomhoman@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Avi bhai",
      product: "Dairy Milk",
      contactnumber: "9867545566",
      email: "veandier@gmail.com",
      type: "Not Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Harsh bhai",
      product: "Tomato",
      contactnumber: "9267545457",
      email: "charin@gmail.com",
      type: "Taking Return",
      ontheway: "12",
    },
    {
      suppliername: "Deep bhai",
      product: "Milk Bikis",
      contactnumber: "9367546531",
      email: "hoffman@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Poojan bhai",
      product: "Marie Gold",
      contactnumber: "9667545982",
      email: "fainden@gmail.com",
      type: "Not Taking Return",
      ontheway: "9",
    },
    {
      suppliername: "Jay bhai",
      product: "Saffola",
      contactnumber: "9867545457",
      email: "martin@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Vasu bhai",
      product: "Good day",
      contactnumber: "9567545769",
      email: "joenike@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
  ]);
  const navigate = useNavigate();
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("suppliername", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Supplier Name
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("product", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[173px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Product
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("contactnumber", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[188px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Contact Number
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("email", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[31px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[197px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Email
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("type", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[31px] text-green-A700 text-sm"
            size="txtInterMedium14GreenA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[214px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            Type
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("ontheway", {
        cell: (info) => (
          <Text
            className="pb-4 pt-[30px] text-blue_gray-700 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[76px] text-blue_gray-500_01 text-sm"
            size="txtInterMedium14Bluegray50001"
          >
            On the way
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
          src="images/img_frame8_blue_600.svg"
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
      <div className="bg-blue_gray-50 flex flex-col font-inter items-start justify-start mx-auto pb-[18px] pr-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[97%] md:w-full">
          <Sidebar11 className="!sticky !w-[280px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-12 items-center justify-start w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <Header1 className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end py-3 rounded-lg w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-1 w-full">
                <div className="flex flex-col items-center justify-start pb-[38px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Text
                      className="mb-0.5 sm:mt-0 mt-3 text-gray-800 text-xl"
                      size="txtInterMedium20Gray800"
                    >
                      Suppliers
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm"
                      onClick={() => navigate("/addsupplier")}
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
                <div className="flex flex-col items-start justify-start pt-[33px] w-full">
                  <div className="overflow-auto md:ml-[0] ml-[17px] w-[96%]">
                    <ReactTable
                      columns={table4Columns}
                      data={table4Data.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  <Line className="bg-blue_gray-50 h-px w-full" />
                  <Line className="bg-blue_gray-50 h-px w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[90%] md:w-full">
                    <Text
                      className="md:mt-0 mt-2 text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Vansh bhai
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[123px] md:mt-0 mt-[9px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Saffola
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[126px] md:mt-0 mt-[9px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      9867545457
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[101px] md:mt-0 mt-2.5 text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      martin@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[71px] md:mt-0 mt-2.5 text-green-A700 text-sm"
                      size="txtInterMedium14GreenA700"
                    >
                      Taking Return
                    </Text>
                    <Text
                      className="mb-2.5 md:ml-[0] ml-[121px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      7
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[987px] mt-[7px] text-blue_gray-700 text-sm"
                    size="txtInterMedium14"
                  >
                    -
                  </Text>
                  <div className="sm:h-[174px] h-[19px] md:h-[26px] mt-[7px] relative w-full">
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[78%]">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Dhyey bhai
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[122px] sm:mt-0 mt-0.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Good day
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[108px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          9567545769
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[101px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          joenike@gmail.com
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[67px] sm:mt-0 mt-0.5 text-green-A700 text-sm"
                          size="txtInterMedium14GreenA700"
                        >
                          Taking Return
                        </Text>
                      </div>
                    </div>
                    <Line className="absolute bg-blue_gray-50 h-px inset-x-[0] mx-auto top-[37%] w-full" />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[987px] mt-1 text-blue_gray-700 text-sm"
                    size="txtInterMedium14"
                  >
                    -
                  </Text>
                  <div className="h-9 sm:h-[297px] md:h-[47px] mt-[11px] relative w-full">
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[90%]">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="mb-[19px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Kartik bhai
                        </Text>
                        <Text
                          className="mb-3 sm:ml-[0] ml-[125px] sm:mt-0 mt-1.5 text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Apple
                        </Text>
                        <Text
                          className="mb-[18px] sm:ml-[0] ml-[134px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          9667545980
                        </Text>
                        <Text
                          className="mb-[17px] sm:ml-[0] ml-[104px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          dender@gmail.com
                        </Text>
                        <Text
                          className="mb-[18px] ml-16 sm:ml-[0] text-red-600 text-sm"
                          size="txtInterMedium14Red600"
                        >
                          Not Taking Return
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[93px] sm:mt-0 mt-[19px] text-blue_gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          7
                        </Text>
                      </div>
                    </div>
                    <Line className="absolute bg-blue_gray-50 h-px inset-x-[0] mx-auto top-[8%] w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-[9px] w-[90%] md:w-full">
                    <Text
                      className="mb-[7px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Meet bhai
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[130px] md:mt-0 mt-[5px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Good day
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[108px] md:mt-0 mt-1.5 text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      9567545769
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[101px] md:mt-0 mt-[7px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      joenike@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[67px] md:mt-0 mt-[7px] text-green-A700 text-sm"
                      size="txtInterMedium14GreenA700"
                    >
                      Taking Return
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[121px] md:mt-0 mt-[7px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      -
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-50 h-px mt-3.5 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-3.5 w-[90%] md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Darshit bhai
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[116px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Good day
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[108px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      9567545769
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[101px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      joenike@gmail.com
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[67px] text-green-A700 text-sm"
                      size="txtInterMedium14GreenA700"
                    >
                      Taking Return
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[121px] text-blue_gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      -
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[26px] w-[98%] md:w-full">
                    <Button
                      className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[92px] text-center text-sm"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    >
                      Previous
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[396px] md:mt-0 mt-[11px] text-blue_gray-700 text-sm"
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
                      className="border border-blue_gray-100_01 border-solid cursor-pointer font-medium min-w-[66px] md:ml-[0] ml-[428px] text-center text-sm"
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
    </>
  );
};

export default SuppliersPage;
