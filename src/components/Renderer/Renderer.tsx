import { RendererType } from './Renderer.types';
import React, { useState } from 'react';
import { objectObserve } from '@library/presource';
import { materialUIComponentList } from '../../configs/list';

const componentList = materialUIComponentList;

/**
 * This component job is to simply render which every component in the json tree using component listing
 * */
export const Renderer: React.FC<RendererType> = ({ id, style, props, nested, onSelected }) => {
  // Extracting the component from the component listing
  const { component: Component, properties: options } = componentList[id];

  const refresh = useState({})[1];

  console.log(props);
  // The reactive properties
  const reactiveProperties = objectObserve(props, ({ method }) => {
    if (method === 'set') {
      console.log('setting new values');
      refresh({});
    }
  });

  const additionalProps: any = {};
  if (nested) {
    // Adding additional props
    additionalProps.children = nested.map((nestedProps, index) => {
      return <Renderer key={index} {...nestedProps} />;
    });
  }

  return (
    <>
      <Component
        {...reactiveProperties}
        {...additionalProps}
        onMouseOver={() => {
          if (onSelected) {
            onSelected({
              // ON Selected triggers
              properties: reactiveProperties,
              options,
            });
          }
        }}
      />
    </>
  );
};
