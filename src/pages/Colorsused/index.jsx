import React from "react";

import { Button, Text } from "components";

const ColorsusedPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto p-[124px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[88px] justify-start max-w-[840px] mx-auto w-full">
          <Text
            className="md:ml-[0] ml-[291px] text-4xl sm:text-[32px] md:text-[34px] text-blue-900_01"
            size="txtInterMedium36"
          >
            Colors
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <div className="bg-blue-600 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-deep_purple-400 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-deep_orange-300 h-[100px] rounded-[10px] w-1/4"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Primary CTA
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Total Returned
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Total Products
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[50px] w-full">
              <div className="bg-green-A700_01 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-red-500 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-blue_gray-50 h-[100px] rounded-[10px] w-1/4"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                In Stock
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Out of stock
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Border
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[50px] w-full">
              <div className="bg-blue_gray-800 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-blue_gray-600 h-[100px] rounded-[10px] w-1/4"></div>
              <div className="bg-blue_gray-400 h-[100px] rounded-[10px] w-1/4"></div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Heading
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Sub Heading
              </Button>
              <Button
                className="!text-gray-700_01 cursor-pointer font-medium leading-[normal] min-w-[210px] rounded-[10px] text-center text-xl"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Body
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsusedPage;
