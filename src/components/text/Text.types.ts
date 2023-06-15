import React from 'react';

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type ITextProps<C extends React.ElementType = 'div'> = {
  as?: C;
  color?: Rainbow | 'black';
};

export type Props<C extends React.ElementType> = React.PropsWithChildren<ITextProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ITextProps<C>>;
