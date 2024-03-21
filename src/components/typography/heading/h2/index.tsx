import React from "react";
import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H2 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h2"
      className={clsx("lite-ui__heading--h2", className)}
      {...rest}
    />
  );
};

export default H2;
