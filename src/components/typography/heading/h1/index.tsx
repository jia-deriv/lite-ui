import Base, { TypographyProps } from "../../base";
import clsx from "clsx";
import "../heading.scss";

const H1 = ({ className, ...rest }: TypographyProps) => {
  return (
    <Base
      as="h1"
      className={clsx(
        "lite-ui__heading--h1",
        "typography__color--primary",
        className
      )}
      {...rest}
    />
  );
};

H1.displayName = "Heading.H1";

export default H1;
