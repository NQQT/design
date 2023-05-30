import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { PermanentDrawerRight } from './Playground';

const template = storybookSetupTemplate((args) => {
  return <PermanentDrawerRight />;
});

export const Main = template();

export default {
  title: 'Playground',
};
