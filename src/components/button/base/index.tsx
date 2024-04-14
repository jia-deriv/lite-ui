import clsx from "clsx";
import { HTMLAttributes } from "react";
import { BasicGenericSizes } from "../../../types";
import "./_button.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "warning" | "error" | "success";
  rounded?: BasicGenericSizes;
  size?: BasicGenericSizes;
}

const Base = ({
  className,
  variant,
  color,
  size = "md",
  rounded = "md",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `button--base`,
        `button--base__size--${size}`,
        `button--base__rounded--${rounded}`,
        `button--base__color--${color}`,
        className
      )}
      {...rest}
    />
  );
};

export default Base;
