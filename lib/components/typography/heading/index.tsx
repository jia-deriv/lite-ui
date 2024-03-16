import React from "react";
import { ReactNode } from "react";
import H1 from "./h1";
import H2 from "./h2";

export type HeadingVariants = {
  H1: typeof H1;
  H2: typeof H2;
};

export const Heading: HeadingVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};

Heading.H1 = H1;
Heading.H2 = H2;

export default Heading;
