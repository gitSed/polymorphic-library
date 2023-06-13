import React from "react";

export type ITextProps<C extends React.ElementType = "div"> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;
