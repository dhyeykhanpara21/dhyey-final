import React from "react";

import { Img, Text } from "components";

const ProductInfoListmenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-4 h-6 md:h-auto items-center justify-start w-[186px]">
          {!!props?.homeimage ? (
            <Img className="h-6 w-6" alt="home" src={props?.homeimage} />
          ) : null}
          <Text
            className="text-base text-blue_gray-600 w-auto"
            size="txtInterMedium16"
          >
            {props?.dashboardtext}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductInfoListmenu.defaultProps = { dashboardtext: "Dashobard" };

export default ProductInfoListmenu;
