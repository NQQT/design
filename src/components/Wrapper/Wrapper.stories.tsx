import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { Button } from '@mui/material';
import { WrapperType } from './Wrapper.types';
import { Wrapper as WrapperComponent } from './Wrapper';

const template = storybookSetupTemplate((args) => {
  return <TestGroup />;
});

const TestGroup = React.memo(() => {
  const props: WrapperType = {
    id: 'testing',
    elements: [
      {
        meta: {
          name: 'button',
          style: {},
          props: {
            variant: 'contained',
            children: 'hello',
          },
        },
      },
    ],
    components: {
      button: Button,
    },
  };
  return <WrapperComponent {...props} />;
});

export const Wrapper = template();

export default {
  title: 'Playground/Template',
};
