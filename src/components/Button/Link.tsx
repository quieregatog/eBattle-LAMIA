import React from "react";
import { Link } from "react-router-dom";
import { IGlobalAttributes } from "../../interface/IGlobal";

interface IButtonLink extends IGlobalAttributes {
  to: string;
}

export const ButtonLink: React.FC<IButtonLink> = ({
  children,
  to,
  ...props
}) => {
  return (
    <Link
      {...props}
      to={to}
      style={{ textDecoration: "none", margin: 0, padding: 0, display: "flex" }}
    >
      {children}
    </Link>
  );
};
