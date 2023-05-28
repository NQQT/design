import { RendererType } from './Renderer.types';
import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const componentList = {
  ToggleButtonGroup,
  ToggleButton,
};

/**
 * This component job is to simply render which every component in the json tree using component listing
 * */
export const Renderer: React.FC<RendererType> = ({ id, style, props, nested }) => {
  const Component = componentList[id];

  const properties: any = { ...props };
  if (nested) {
    properties.children = nested.map((nestedProps, index) => {
      return <Renderer key={index} {...nestedProps} />;
    });
  }

  return <Component {...properties} />;
};
