import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H6 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h6"
      className={clsx(
        "lite-ui__heading--h6",
        "typography__color--primary",
        className
      )}
      {...rest}
    />
  );
};

export default H6;
