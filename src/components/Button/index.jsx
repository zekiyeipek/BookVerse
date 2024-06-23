import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[15px]" };
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-blue_gray-900",
    gray_300: "bg-gray-300 text-blue_gray-900",
    red_200: "bg-red-200 text-blue_gray-900",
    white_A700: "bg-white-A700 text-black-900",
    red_400: "bg-red-400 text-white-A700",
    gray_50_01: "bg-gray-50_01 text-gray-900",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-2.5", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "gray_50_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_50",
    "gray_300",
    "red_200",
    "white_A700",
    "red_400",
    "gray_50_01",
  ]),
};

export { Button };
