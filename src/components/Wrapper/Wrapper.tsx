import React from 'react';
import { WrapperType } from './Wrapper.types';
import { isFunction, objectHasKey } from '@library/presource';
import { wrapperRenderElementProps } from './Wrapper.script';

/**
 * This is the Wrapper component. It wraps around the visual components
 */

export const Wrapper: React.FC<WrapperType> = ({ id, elements, components }) => {
  const containerProps: React.HTMLAttributes<HTMLDivElement> = {
    id: `${id}-container`,
    style: {
      position: 'relative',
    },
  };

  const screenProps: React.HTMLAttributes<HTMLDivElement> = {
    id: `${id}-screen`,
    style: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    onClick: () => {
      // TODO Open Panel on Click
    },
  };

  return (
    <>
      <div {...containerProps}>
        {elements.map((element, index) => {
          const { meta } = element;
          const { name, props } = meta;
          if (objectHasKey(components, name)) {
            const Item = components[name];

            const properties = wrapperRenderElementProps(props);

            if (isFunction(properties.children)) {
              // Converting Property Children into proper format to be rendered
              properties.children = properties.children(properties.children);
            }

            // Rendering the component in react
            return <Item key={index} {...properties} />;
          }
          return `cannot find ${name} in list`;
        })}
        <div {...screenProps}></div>
      </div>
    </>
  );
};
