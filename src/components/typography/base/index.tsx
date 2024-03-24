import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | THeaders;
  bold?: boolean;
  italic?: boolean;
}

type THeaders = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Base = ({
  as: Element = "p",
  bold,
  italic,
  className,
  ...rest
}: TypographyProps) => {
  return (
    <Element
      className={clsx(
        "typography__base",
        bold && "typography__bold",
        italic && "typography__italic",
        className
      )}
      {...rest}
    />
  );
};

export default Base;
