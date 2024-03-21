import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | THeaders;
}

type THeaders = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Base = ({ as: Element = "p", className, ...rest }: TypographyProps) => {
  return (
    <Element
      className={clsx(
        "typography__base",
        "typography__color-primary",
        className
      )}
      {...rest}
    />
  );
};

export default Base;
