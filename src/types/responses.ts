type FilterItemDataType = {
  id: number;
  label: string;
  value: string;
};

export type FilterItemType = {
  label: string;
  items: Array<FilterItemDataType>;
};

export type FilterMenuItemType = {
  [key: string]: FilterItemType;
};

export interface FilterMenuResponseType {
  range: FilterMenuItemType;
  status: FilterMenuItemType;
}

export type ProductResponseType = Array<{
  id: number;
  name: string;
  image: string;
  properties: {
    cloth: string;
    clothLabel: string;
    color: string;
    colorLabel: string;
    cut: string;
    cutLabel: string;
    gender: string;
    genderLabel: string;
    size: string;
    sizeLabel: string;
    price: number;
    year: number;
  };
}>
