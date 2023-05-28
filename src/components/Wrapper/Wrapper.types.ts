/**
 * Configuration of type for easier manipulation
 */

export type WrapperType = {
  // The identification of the container
  id: string;
  // The list of elements that needs to be rendered within this Wrapper
  elements: WrapperElementType[];
  components: { [key: string]: WrapperComponentType };
};

export type WrapperComponentType = any;

export type WrapperElementType = {
  meta: {
    // The name of the component to be read from component list
    name: string;
    style: WrapperElementStyleType;
    // The props to be loaded into the component
    props: WrapperElementPropertyType;
  };
};

export type WrapperElementStyleType = { [key: string]: any };
export type WrapperElementPropertyType = { [key: string]: any };
