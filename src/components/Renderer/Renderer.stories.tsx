import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { Renderer as RendererComponent } from './Renderer';
import { createDataState, RendererEditorProperty } from '@common/assets';

const template = storybookSetupTemplate((args) => {
  return <TestGroup />;
});

const props = {
  id: 'ToggleButtonGroup',
  props: {
    color: 'primary',
    size: 'small',
    orientation: 'vertical',
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
        color: 'secondary',
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

const TestGroup = React.memo(() => {
  return (
    <>
      <RendererComponent
        {...props}
        onSelected={({ properties, options }) => {
          console.log(properties, options);
          reactive.props = properties;
          reactive.configs = options;
        }}
      />
      <Loader />
    </>
  );
});

const reactive = createDataState({
  props: null,
  configs: null,
});
const Loader = () => {
  const { props, configs } = reactive();

  if (!props || configs) return null;
  return <RendererEditorProperty props={props} configs={configs} />;
};

export const Renderer = template();

export default {
  title: 'Playground/Template',
};
