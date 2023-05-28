import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { RendererType } from './Renderer.types';
import { Renderer as RendererComponent } from './Renderer';

const template = storybookSetupTemplate((args) => {
  return <TestGroup />;
});

const TestGroup = React.memo(() => {
  const props: RendererType = {
    id: 'ToggleButtonGroup',
    props: {
      color: 'primary',
      value: 'alignment',
      exclusive: true,
      onChange: () => {
        console.log('on changed');
      },
      'aria-label': 'Platform',
    },
    nested: [
      {
        id: 'ToggleButton',
        props: {
          value: 'web',
          children: 'Web',
        },
      },
      {
        id: 'ToggleButton',
        props: {
          value: 'android',
          children: 'Android',
        },
      },
      {
        id: 'ToggleButton',
        props: {
          value: 'ios',
          children: 'iOS',
        },
      },
    ],
  };
  return <RendererComponent {...props} />;
});

export const Renderer = template();

export default {
  title: 'Playground/Template',
};
