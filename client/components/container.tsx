import React from "react";

type Props = {
  children: React.ReactNode;
  cssExtension?: string;
};

function Container({ children, cssExtension = "" }: Props) {
  return <div className={"w-full max-w-screen-lg mx-auto" + ' ' + cssExtension}>{children}</div>;
}

export default Container;
