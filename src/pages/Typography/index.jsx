import React from "react";

import { Line, List, Text } from "components";

const TypographyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-16 items-start justify-start mx-auto md:px-10 px-12 sm:px-5 py-8 w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[2192px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-auto"
              size="txtInterRegular48"
            >
              Inter
            </Text>
            <Text
              className="md:text-5xl text-[112px] text-gray-900_01 w-auto"
              size="txtInterRegular112"
            >
              Ag
            </Text>
          </div>
          <Text
            className="leading-[60.00px] max-w-[2192px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 tracking-[-0.96px]"
            size="txtInterRegular48"
          >
            <>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 !@#$%^&*()
            </>
          </Text>
        </div>
        <List
          className="flex flex-col gap-14 items-center max-w-[2192px] mx-auto w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Display sm
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 30px / 1.875rem | Line height: 38px / 2.375rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[38.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-full"
                size="txtInterRegular30"
              >
                <>
                  Display sm
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[38.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-full"
                size="txtInterMedium30"
              >
                <>
                  Display sm
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[38.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-full"
                size="txtInterSemiBold30Gray90001"
              >
                <>
                  Display sm
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[38.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-full"
                size="txtInterBold30"
              >
                <>
                  Display sm
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Display xs
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 24px / 1.5rem | Line height: 32px / 2rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-full"
                size="txtInterRegular24"
              >
                <>
                  Display xs
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-full"
                size="txtInterMedium24"
              >
                <>
                  Display xs
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-full"
                size="txtInterSemiBold24"
              >
                <>
                  Display xs
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[32.00px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-full"
                size="txtInterBold24"
              >
                <>
                  Display xs
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Text xl
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 20px / 1.25rem | Line height: 30px / 1.875rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[30.00px] text-gray-900_01 text-xl w-full"
                size="txtInterRegular20"
              >
                <>
                  Text xl
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[30.00px] text-gray-900_01 text-xl w-full"
                size="txtInterMedium20Gray90001"
              >
                <>
                  Text xl
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[30.00px] text-gray-900_01 text-xl w-full"
                size="txtInterSemiBold20"
              >
                <>
                  Text xl
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[30.00px] text-gray-900_01 text-xl w-full"
                size="txtInterBold20"
              >
                <>
                  Text xl
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Text lg
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 18px / 1.125rem | Line height: 28px / 1.75rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[28.00px] text-gray-900_01 text-lg w-full"
                size="txtInterRegular18"
              >
                <>
                  Text lg
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[28.00px] text-gray-900_01 text-lg w-full"
                size="txtInterMedium18"
              >
                <>
                  Text lg
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[28.00px] text-gray-900_01 text-lg w-full"
                size="txtInterSemiBold18"
              >
                <>
                  Text lg
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[28.00px] text-gray-900_01 text-lg w-full"
                size="txtInterBold18"
              >
                <>
                  Text lg
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Text md
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 16px / 1rem | Line height: 24px / 1.5rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[24.00px] text-base text-gray-900_01 w-full"
                size="txtInterRegular16Gray90001"
              >
                <>
                  Text md
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[24.00px] text-base text-gray-900_01 w-full"
                size="txtInterMedium16Gray90001"
              >
                <>
                  Text md
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[24.00px] text-base text-gray-900_01 w-full"
                size="txtInterSemiBold16Gray90001"
              >
                <>
                  Text md
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[24.00px] text-base text-gray-900_01 w-full"
                size="txtInterBold16"
              >
                <>
                  Text md
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[2192px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Text small
                </Text>
                <Text
                  className="text-base text-blue_gray-500 w-auto"
                  size="txtInterRegular16"
                >
                  Font size: 14px / 0.875rem | Line height: 20px / 1.25rem
                </Text>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
              <Text
                className="flex-1 leading-[20.00px] text-gray-900_01 text-sm w-full"
                size="txtInterRegular14Gray90001"
              >
                <>
                  Text sm
                  <br />
                  Regular
                </>
              </Text>
              <Text
                className="flex-1 leading-[20.00px] text-gray-900_01 text-sm w-full"
                size="txtInterMedium14Gray90001"
              >
                <>
                  Text sm
                  <br />
                  Medium
                </>
              </Text>
              <Text
                className="flex-1 leading-[20.00px] text-gray-900_01 text-sm w-full"
                size="txtInterSemiBold14Gray90001"
              >
                <>
                  Text sm
                  <br />
                  Semibold
                </>
              </Text>
              <Text
                className="flex-1 leading-[20.00px] text-gray-900_01 text-sm w-full"
                size="txtInterBold14"
              >
                <>
                  Text sm
                  <br />
                  Bold
                </>
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default TypographyPage;
