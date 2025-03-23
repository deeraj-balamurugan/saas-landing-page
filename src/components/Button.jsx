import React from "react";

const Button = ({
  children,
  onClick = () => {},
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition duration-200";

  const variants = {
    default: "hover:bg-gray-500",
    primary: "bg-black text-white hover:bg-gray-400",
    primary_full: "bg-black text-white hover:bg-gray-400 w-full",
    secondary: "bg-gray-200 text-black hover:bg-gray-500",
    secondary_full: "bg-white text-black hover:bg-gray-500 w-full",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${
        variants[variant] || variants.default
      } ${className}`}
      aria-label={children} // Improves accessibility
      {...props} // Allows passing additional props like `disabled`
    >
      {children}
    </button>
  );
};

export default Button;
