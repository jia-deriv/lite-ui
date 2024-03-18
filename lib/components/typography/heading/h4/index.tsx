import React from "react";
import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H4 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h4"
      className={clsx("lite-ui__heading--h4", className)}
      {...rest}
    />
  );
};

export default H4;
