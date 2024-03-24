import clsx from "clsx";
import Base, { TypographyProps } from "../base";

export const Text = ({ as = "p", className, ...rest }: TypographyProps) => {
  return (
    <Base
      as={as}
      className={clsx("typography__color--paragraph", className)}
      {...rest}
    />
  );
};

export default Text;
