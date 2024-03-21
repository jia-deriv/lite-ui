import React from "react";
import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H5 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h5"
      className={clsx("lite-ui__heading--h5", className)}
      {...rest}
    />
  );
};

export default H5;
