import React from "react";
import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H3 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h3"
      className={clsx("lite-ui__heading--h3", className)}
      {...rest}
    />
  );
};

export default H3;
