import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded" };
const variants = {
  fill: {
    deep_purple_50: "bg-deep_purple-50",
    blue_50: "bg-blue-50",
    light_blue_50: "bg-light_blue-50",
    red_50: "bg-red-50 text-red-900",
    blue_700: "bg-blue-700 text-white-A700",
    orange_50: "bg-orange-50",
    white_A700: "bg-white-A700 shadow-bs text-blue_gray-700",
  },
  outline: {
    blue_gray_100:
      "border border-blue_gray-100 border-solid shadow-bs text-blue_gray-600",
    blue_gray_100_01:
      "border border-blue_gray-100_01 border-solid shadow-bs text-blue_gray-600",
    blue_gray_50: "border border-blue_gray-50 border-solid text-blue_gray-400",
  },
};
const sizes = { xs: "p-0.5", sm: "p-1.5", md: "p-2.5", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_purple_50",
    "blue_50",
    "light_blue_50",
    "red_50",
    "blue_700",
    "orange_50",
    "white_A700",
    "blue_gray_100",
    "blue_gray_100_01",
    "blue_gray_50",
  ]),
};

export { Button };
