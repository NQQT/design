import { TypeLayoutRendererComponent } from '@common/assets';

export const toggleButtonVerticalOrientation: TypeLayoutRendererComponent = {
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
