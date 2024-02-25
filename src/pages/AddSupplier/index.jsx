import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import Header1 from "components/Header1";
import ProductInfoListmenu from "components/ProductInfoListmenu";

import { CloseSVG } from "../../assets/images";

const AddSupplierPage = () => {
  const table5Data = React.useRef([
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
    {
      suppliername: "Dhyey bhai",
      product: "Saffola",
      contactnumber: "9867545457",
      email: "martin@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Dhyey bhai",
      product: "Good day",
      contactnumber: "9567545769",
      email: "joenike@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Meet bhai",
      product: "Good day",
      contactnumber: "9567545769",
      email: "joenike@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
    {
      suppliername: "Darshit bhai",
      product: "Good day",
      contactnumber: "9567545769",
      email: "joenike@gmail.com",
      type: "Taking Return",
      ontheway: "-",
    },
  ]);
  const navigate = useNavigate();
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("suppliername", {
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
      table5ColumnHelper.accessor("product", {
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
      table5ColumnHelper.accessor("contactnumber", {
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
      table5ColumnHelper.accessor("email", {
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
      table5ColumnHelper.accessor("type", {
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
      table5ColumnHelper.accessor("ontheway", {
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

  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const productInfoListmenuPropList = [
    { homeimage: "images/img_home_blue_gray_600.svg" },
    { dashboardtext: "Inventory" },
    { dashboardtext: "Suppliers" },
    { dashboardtext: "Orders" },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 font-inter h-[982px] mx-auto pb-[22px] sm:pr-5 pr-[22px] relative w-full">
        <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start md:px-5 py-7 right-[5%] top-[0] w-[77%]">
          <Header1 className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
        </div>
        <div className="absolute bg-white-A700 bottom-[4%] flex flex-col items-center justify-end md:px-5 py-3 right-[5%] rounded-lg w-[73%]">
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
                  className="cursor-pointer font-medium min-w-[116px] sm:ml-[0] ml-[614px] text-center text-sm"
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
                  columns={table5Columns}
                  data={table5Data.current}
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
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-1.5 w-[90%] md:w-full">
                <Text
                  className="mb-[9px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Vansh bhai
                </Text>
                <Text
                  className="md:ml-[0] ml-[123px] md:mt-0 mt-[9px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Apple
                </Text>
                <Text
                  className="md:ml-[0] ml-[134px] md:mt-0 mt-2 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  9667545980
                </Text>
                <Text
                  className="md:ml-[0] ml-[101px] md:mt-0 my-1 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  dender@gmail.com
                </Text>
                <Text
                  className="md:ml-[0] ml-[281px] md:mt-0 mt-2 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  7
                </Text>
              </div>
              <Line className="bg-blue_gray-50 h-px mt-12 w-full" />
              <Line className="bg-blue_gray-50 h-px mt-[47px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[17px] mt-1.5 w-[90%] md:w-full">
                <Text
                  className="mb-[9px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Kartik bhai
                </Text>
                <Text
                  className="md:ml-[0] ml-[125px] md:mt-0 mt-[9px] text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  Apple
                </Text>
                <Text
                  className="md:ml-[0] ml-[134px] md:mt-0 mt-2 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  9667545980
                </Text>
                <Text
                  className="mb-[3px] md:ml-[0] ml-[101px] md:mt-0 mt-1.5 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  dender@gmail.com
                </Text>
                <Text
                  className="mb-[3px] md:ml-[0] ml-[67px] md:mt-0 mt-1.5 text-red-600 text-sm"
                  size="txtInterMedium14Red600"
                >
                  Not Taking Return
                </Text>
                <Text
                  className="md:ml-[0] ml-[93px] md:mt-0 mt-2 text-blue_gray-700 text-sm"
                  size="txtInterMedium14"
                >
                  7
                </Text>
              </div>
              <Line className="bg-blue_gray-50 h-px mt-12 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-4 md:ml-[0] mt-[59px] w-[98%] md:w-full">
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
        <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col gap-11 md:h-auto h-full items-center justify-between my-auto pb-8 pt-6 md:px-5 px-6 rounded-br-lg rounded-tr-lg w-[280px]">
          <div className="flex flex-col gap-8 items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-center px-3 py-1 w-[232px]">
              <div className="flex flex-col items-start justify-center px-3 py-1 w-[220px]">
                <Img
                  className="h-[108px] md:h-auto object-cover w-[178px] sm:w-full"
                  src="images/img_addasubheading.png"
                  alt="addasubheading"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start px-4 py-2 w-[232px]">
              <List
                className="flex flex-col gap-3 items-start w-full"
                orientation="vertical"
              >
                {productInfoListmenuPropList.map((props, index) => (
                  <React.Fragment key={`ProductInfoListmenu${index}`}>
                    <ProductInfoListmenu
                      className="flex flex-1 flex-col gap-2.5 items-start justify-start my-0 py-4 rounded-lg w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <ProductInfoListmenu
              className="common-pointer flex flex-col gap-2.5 items-start justify-start p-4 rounded-lg w-[232px]"
              onClick={() => navigate("/")}
              homeimage="images/img_logout_blue_gray_600.svg"
              dashboardtext="Log Out"
            />
          </div>
        </div>
        <div className="absolute bg-blue_gray-100_75 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-[118px] md:px-5 w-[96%]">
          <div className="bg-white-A700 flex flex-col items-center justify-end mt-1 p-[22px] sm:px-5 rounded-lg w-[42%] md:w-full">
            <div className="flex flex-col items-start justify-start mt-2 w-[97%] md:w-full">
              <Text
                className="text-blue_gray-800 text-xl"
                size="txtInterMedium20"
              >
                New Supplier
              </Text>
              <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[114px] mt-[13px] w-auto">
                <Img
                  className="h-[81px] w-[81px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <div className="flex flex-col items-center justify-start">
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
              <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-8 w-auto sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Supplier Name
                </Text>
                <Input
                  name="input"
                  placeholder="Entersupplier name"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-[63%] sm:w-full"
                  type="text"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row items-center justify-between mt-6 w-[440px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Product
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content"
                    placeholder="Enter product"
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
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-6 w-[438px] sm:w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Contact Number
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-lg shadow-bs w-[273px] sm:w-full">
                  <Input
                    name="content_Two"
                    placeholder="Enter supplier contact number"
                    className="p-0 placeholder:text-blue_gray-400 text-base text-blue_gray-400 text-left w-full"
                    wrapClassName="w-full"
                    type="number"
                    size="xs"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-6 w-[319px]">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  Type
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-blue_gray-400 border border-blue_gray-100 border-solid cursor-pointer min-w-[157px] rounded-lg text-base text-center"
                    color="white_A700"
                    variant="fill"
                  >
                    Not taking return
                  </Button>
                  <Button
                    className="!text-blue_gray-400 border border-blue_gray-100 border-solid cursor-pointer min-w-[128px] rounded-lg text-base text-center"
                    color="white_A700"
                    variant="fill"
                  >
                    Taking return
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[201px] mt-8 w-[55%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] text-base text-center w-[110px]"
                  onClick={() => navigate("/suppliers")}
                  shape="round"
                  color="blue_gray_50"
                  variant="outline"
                >
                  Discard
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[119px] text-center text-sm"
                  shape="round"
                  color="blue_700"
                  variant="fill"
                >
                  Add Supplier
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSupplierPage;
