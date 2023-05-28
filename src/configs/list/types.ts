export type ComponentListType = {
  [key: string]: {
    component: any;
    // Options for Property
    properties: {
      [key: string]: ComponentListOptionsPropertyType;
    };
  };
};

export type ComponentListOptionsPropertyType = {
  type: 'boolean' | 'select' | 'input';
  options: (number | string | boolean)[];
};
