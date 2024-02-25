import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";
import ProductInfoListmenu from "components/ProductInfoListmenu";

import { CloseSVG } from "../../assets/images";

const ProductInfoPage = () => {
  const productInfoListmenuPropList = [
    { homeimage: "images/img_home_blue_gray_600.svg" },
    { dashboardtext: "Inventory" },
    { dashboardtext: "Suppliers" },
    { dashboardtext: "Orders" },
  ];
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter items-start justify-start mx-auto pb-[22px] sm:pr-5 pr-[22px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:px-5 w-[97%] md:w-full">
          <div className="bg-white-A700 border-blue_gray-50 border-r border-solid flex flex-col gap-11 h-[960px] md:h-auto items-start justify-between pb-8 pt-6 sm:px-5 px-6 rounded-br-lg rounded-tr-lg w-[280px]">
            <div className="flex flex-col gap-8 items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-center px-3 py-1 w-[232px]">
                <Img
                  className="h-[108px] md:h-auto object-cover w-[178px] sm:w-full"
                  src="images/img_addasubheading.png"
                  alt="addasubheading"
                />
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
                className="flex flex-col gap-2.5 items-start justify-start p-4 rounded-lg w-[232px]"
                homeimage="images/img_logout.svg"
                dashboardtext="Log Out"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[22px] items-center justify-start w-[81%] md:w-full">
            <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start py-7 w-full">
              <Header1 className="flex sm:flex-col flex-row md:gap-10 items-center justify-between sm:px-5 px-8 w-full" />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[13px] rounded-lg w-[95%] md:w-full">
              <div className="flex flex-col justify-start mt-0.5 w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterMedium20"
                  >
                    Matrushakti
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[86px] sm:ml-[0] ml-[752px] sm:mt-0 mt-0.5"
                    leftIcon={
                      <Img
                        className="h-5 mr-2"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                    shape="round"
                  >
                    <div className="!text-blue_gray-600 font-medium text-left text-sm">
                      Edit
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[99px] ml-3 sm:ml-[0] sm:mt-0 mt-0.5 text-center text-sm"
                    shape="round"
                    color="blue_gray_100"
                    variant="outline"
                  >
                    Download
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[19px] w-[45%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtInterRegular16Bluegray700"
                  >
                    Overiew
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[59px] text-base text-blue_gray-500_01"
                    size="txtInterRegular16Bluegray50001"
                  >
                    Purchases
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[61px] text-base text-blue_gray-500_01"
                    size="txtInterRegular16Bluegray50001"
                  >
                    Adjustments
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[65px] text-base text-blue_gray-500_01"
                    size="txtInterRegular16Bluegray50001"
                  >
                    History
                  </Text>
                </div>
                <Line className="bg-blue-700 h-0.5 mr-[989px] mt-2.5 rounded-[1px] w-[8%]" />
                <Line className="bg-blue_gray-50 h-px ml-6 md:ml-[0] mr-[35px] w-[95%]" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[27px] mt-[25px] w-[90%] md:w-full">
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px] w-[34%] sm:w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtInterSemiBold16Bluegray700"
                    >
                      Primary Details
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-[19px] w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtInterMedium14Bluegray400"
                      >
                        Product name
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterMedium14Bluegray600"
                      >
                        Matrushakti
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[34px] w-[92%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtInterMedium14Bluegray400"
                      >
                        Product ID
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterMedium14Bluegray600"
                      >
                        456567
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[34px] w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtInterMedium14Bluegray400"
                      >
                        Product category
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterMedium14Bluegray600"
                      >
                        Instant food
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[170px] items-center justify-start outline-[1px] outline-dashed outline-gray-500 p-[9px] w-[170px]">
                    <Img
                      className="h-[150px] md:h-auto mb-0.5 object-cover w-[150px]"
                      src="images/img_26616020maggi.png"
                      alt="26616020maggi"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[27px] mt-[33px] w-[28%] md:w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Expiry Date
                  </Text>
                  <Text
                    className="text-blue_gray-600 text-sm"
                    size="txtInterMedium14Bluegray600"
                  >
                    13/4/23
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[27px] mt-[13px] w-[93%] md:w-full">
                  <Text
                    className="md:mt-0 mt-5 text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Threshold Value
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[131px] md:mt-0 mt-5 text-blue_gray-600 text-sm"
                    size="txtInterMedium14Bluegray600"
                  >
                    12
                  </Text>
                  <Text
                    className="mb-4 md:ml-[0] ml-[483px] text-base text-blue_gray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Opening Stock
                  </Text>
                  <Text
                    className="mb-[17px] md:ml-[0] ml-[113px] text-base text-blue_gray-600"
                    size="txtInterMedium16"
                  >
                    40
                  </Text>
                </div>
                <div className="flex flex-row gap-[94px] items-center justify-end md:ml-[0] ml-[766px] mt-[15px] w-[24%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Remaining Stock
                  </Text>
                  <Text
                    className="text-base text-blue_gray-600"
                    size="txtInterMedium16"
                  >
                    34
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[27px] mt-2.5 text-base text-blue_gray-700"
                  size="txtInterSemiBold16Bluegray700"
                >
                  Supplier Details
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[27px] mt-1 w-[93%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[17px] text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Supplier name
                  </Text>
                  <Text
                    className="mb-[13px] md:ml-[0] ml-[643px] text-base text-blue_gray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    On the way
                  </Text>
                  <Text
                    className="mb-3.5 md:ml-[0] ml-[139px] text-base text-blue_gray-600"
                    size="txtInterMedium16"
                  >
                    15
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[27px] mt-[23px] w-[93%] md:w-full">
                  <Text
                    className="md:mt-0 mt-2.5 text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Contact Number
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[129px] md:mt-0 mt-2.5 text-blue_gray-600 text-sm"
                    size="txtInterMedium14Bluegray600"
                  >
                    98789 86757
                  </Text>
                  <Text
                    className="mb-[7px] md:ml-[0] ml-[409px] text-base text-blue_gray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Threshold value
                  </Text>
                  <Text
                    className="mb-1.5 md:ml-[0] ml-[104px] text-base text-blue_gray-600"
                    size="txtInterMedium16"
                  >
                    12
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[27px] mt-[45px] text-base text-blue_gray-700"
                  size="txtInterSemiBold16Bluegray700"
                >
                  Stock Locations
                </Text>
                <div className="bg-blue_gray-50_87 border-b border-blue_gray-50_87 border-solid flex sm:flex-col flex-row sm:gap-10 gap-[469px] items-start justify-start md:ml-[0] ml-[21px] mr-[354px] mt-[21px] p-1.5 w-[65%] md:w-full">
                  <Text
                    className="mb-[7px] sm:mt-0 mt-[3px] text-blue_gray-600 text-sm"
                    size="txtInterSemiBold14"
                  >
                    Store Name
                  </Text>
                  <Text
                    className="mb-[7px] sm:mt-0 mt-[3px] text-blue_gray-600 text-sm"
                    size="txtInterSemiBold14"
                  >
                    Stock in hand
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[27px] mt-[19px] w-[61%] md:w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Sulur Branch
                  </Text>
                  <Text
                    className="text-blue-700 text-sm"
                    size="txtInterMedium14Blue700"
                  >
                    15
                  </Text>
                </div>
                <Line className="bg-blue_gray-50 h-px md:ml-[0] ml-[26px] mr-[354px] mt-3.5 w-[65%]" />
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[27px] mt-[19px] w-[61%] md:w-full">
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtInterMedium14Bluegray400"
                  >
                    Singanallur Branch
                  </Text>
                  <Text
                    className="text-blue-700 text-sm"
                    size="txtInterMedium14Blue700"
                  >
                    19
                  </Text>
                </div>
                <Line className="bg-blue_gray-50 h-px md:ml-[0] ml-[26px] mr-[354px] mt-3 w-[65%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoPage;
