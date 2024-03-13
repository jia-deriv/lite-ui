import React, { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | THeaders;
}

type THeaders = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Base = ({ as: Element = "p", ...rest }: TypographyProps) => {
  return <Element {...rest} />;
};

export default Base;
