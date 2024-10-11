import React from "react";

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  textSize: string;
  textWeight: string;
  width: string;
  onClick?: () => void;
}

const Button = ({
  bgColor,
  textColor,
  text,
  textSize,
  textWeight,
  width,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={`px-4 py-2 rounded-md hover:scale-105 transition text-center hover:cursor-pointer ${bgColor} ${textColor} ${textSize} ${textWeight} ${width}`} onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
