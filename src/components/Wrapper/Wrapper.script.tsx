import { WrapperElementPropertyType, WrapperType } from './Wrapper.types';
import { typeSwitch } from '@library/presource';
import React from 'react';
import { Wrapper } from './Wrapper';

export const wrapperRenderElementProps = (props: WrapperElementPropertyType) => {
  const result = { ...props };
  const { children } = props;
  typeSwitch(children, {
    array: () => {
      result.children = (wrappers: WrapperType[]) => {
        return wrappers.map((innerWrapperProps) => {
          // Every child within must be a Wrapper
          return <Wrapper {...innerWrapperProps} />;
        });
      };
    },
  });
  return result;
};
