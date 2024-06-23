import React from "react";

const sizeClasses = {
  txtInterSemiBold24Black900: "font-inter font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium24Black900: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium15: "font-inter font-medium",
  txtInterLight15: "font-inter font-light",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterLight16: "font-inter font-light",
  txtInterLight24: "font-inter font-light",
  txtInterLight14: "font-inter font-light",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterLight20: "font-inter font-light",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium20Red900: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular36: "font-inter font-normal",
  txtInterSemiBold20Bluegray90001: "font-inter font-semibold",
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
