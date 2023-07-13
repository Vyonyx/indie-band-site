import React from "react";

type Props = {
  children: React.ReactNode;
  cssExtension?: string;
};

function Container({ children, cssExtension = "" }: Props) {
  return <div className={"container mx-auto" + ' ' + cssExtension}>{children}</div>;
}

export default Container;
