export type RendererType = {
  id: string;
  style?: RendererStyleType;
  props?: RendererPropertyType;
  nested?: RendererType[];
  onSelected?: (data: any) => any;
};

export type RendererStyleType = { [key: string]: number | string };
export type RendererPropertyType = { [key: string]: any };
