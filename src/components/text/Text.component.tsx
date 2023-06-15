import React from 'react';

import { Props } from './Text.types';

function Text<C extends React.ElementType = 'div'>(props: Props<C>) {
  const { as, children, color, ...restProps } = props;

  const Component = as || 'div';

  const style = color ? { style: { color } } : {};

  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  );
}

export default Text;
