import React from "react";

const sizeClasses = {
  txtInterSemiBold16Yellow800: "font-inter font-semibold",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold16Bluegray800: "font-inter font-semibold",
  txtInterSemiBold14Gray90001: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterMedium14Bluegray600: "font-inter font-medium",
  txtInterSemiBold16Deeppurple400: "font-inter font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium14Gray800: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterRegular16Gray90001: "font-inter font-normal",
  txtInterRegular12Bluegray400: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtInterMedium14Red600: "font-inter font-medium",
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtInterMedium14Blue900: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtInterSemiBold16Gray90001: "font-inter font-semibold",
  txtInterMedium14Blue700: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterBold14: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14GreenA700: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterSemiBold30Gray900: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium16Bluegray700: "font-inter font-medium",
  txtInterRegular18: "font-inter font-normal",
  txtInterRegular14Gray90001: "font-inter font-normal",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterRegular16Bluegray50001: "font-inter font-normal",
  txtInterSemiBold16Blue600: "font-inter font-semibold",
  txtInterSemiBold16Bluegray700: "font-inter font-semibold",
  txtInterMedium14Orange600: "font-inter font-medium",
  txtInterRegular112: "font-inter font-normal",
  txtInterMedium16Gray90001: "font-inter font-medium",
  txtInterMedium20Gray800: "font-inter font-medium",
  txtInterMedium14Gray700: "font-inter font-medium",
  txtInterSemiBold30Gray90001: "font-inter font-semibold",
  txtInterRegular48: "font-inter font-normal",
  txtInterSemiBold16Red300: "font-inter font-semibold",
  txtInterMedium14Blue600: "font-inter font-medium",
  txtInterRegular14Blue900: "font-inter font-normal",
  txtInterRegular16Bluegray800: "font-inter font-normal",
  txtInterMedium14Gray90001: "font-inter font-medium",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular14BlueA200: "font-inter font-normal",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterMedium14Yellow80001: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium36: "font-inter font-medium",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium14Bluegray50001: "font-inter font-medium",
  txtInterMedium20Gray90001: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium14GreenA70001: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
