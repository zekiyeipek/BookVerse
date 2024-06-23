import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_50: "bg-gray-50 text-blue_gray-900",
    white_A700: "bg-white-A700",
    blue_gray_50_ce: "bg-blue_gray-50_ce text-black-900",
  },
};
const shapes = { round: "rounded-[34px]" };
const sizes = {
  sm: "pb-2 pt-3 px-2",
  md: "pb-[13px] pl-3 pr-[13px] pt-3.5",
  lg: "pb-3.5 pl-3 pr-3.5 pt-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "blue_gray_50_ce",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "white_A700", "blue_gray_50_ce"]),
};

export { Input };
