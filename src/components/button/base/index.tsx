import clsx from "clsx";
import { HTMLAttributes } from "react";
import { TGenericSizes } from "../../../types";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "warning" | "error" | "success";
  size?: Extract<TGenericSizes, "sm" | "md" | "lg" | "xl">;
}

const Base = ({
  className,
  variant,
  color,
  size = "md",
  ...rest
}: ButtonProps) => {
  return <button className={clsx("", className)} {...rest} />;
};

export default Base;
