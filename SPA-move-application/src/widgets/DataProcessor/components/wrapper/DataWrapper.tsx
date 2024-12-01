import React, { ReactElement } from 'react';

interface WrapperComponentProps<T> {
  data: T[];
  children: ReactElement;
}

const WrapperComponent = <T,>({ data, children }: WrapperComponentProps<T>) => (
  <>
    {data.map((item, index) => {
      return React.cloneElement(children, { key: index, ...item });
    })}
  </>
);

export default WrapperComponent;
