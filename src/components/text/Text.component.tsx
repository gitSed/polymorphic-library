import React from "react";

import { ITextProps } from "./Text.types";

function Text<C extends React.ElementType = "div">(props: ITextProps<C>) {
  const { as, children, ...restProps } = props;

  const Component = as || "div";

  return <Component {...restProps}>{children}</Component>;
}

export default Text;
