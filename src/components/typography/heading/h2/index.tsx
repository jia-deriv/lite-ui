import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H2 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h2"
      className={clsx(
        "lite-ui__heading--h2",
        "typography__color--primary",
        className
      )}
      {...rest}
    />
  );
};

export default H2;
